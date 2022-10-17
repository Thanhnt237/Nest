import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import {iLogger} from "../utils/logger/iLogger";

@Injectable()
export class LoggerApiMiddleware implements NestMiddleware {
    constructor(
        private readonly logger: iLogger
    ) {
    }
    use(req: Request, res: Response, next: NextFunction) {
        const { ip, method, originalUrl } = req
        res.on('close', () => {
            const { statusCode, statusMessage } = res;
            console.log(method, originalUrl, statusCode, statusMessage, ip)
        });

        next();
    }
}
