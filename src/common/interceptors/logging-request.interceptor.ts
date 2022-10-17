import {CallHandler, ExecutionContext, Injectable, NestInterceptor} from "@nestjs/common";
import {Observable, tap} from "rxjs"
import {iLogger} from "../utils/logger/iLogger";

@Injectable()
export class LoggingRequestInterceptor implements NestInterceptor {
    constructor(
        private readonly logger: iLogger
    ) {
    }
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const now = Date.now();
        return next
            .handle()
            .pipe(
                tap(() => this.logger.log(`${Date.now() - now}ms`, `${context.switchToHttp().getRequest().url}`)),
            );
    }
}