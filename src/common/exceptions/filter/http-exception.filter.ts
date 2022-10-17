import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import {iLogger} from "../../utils/logger/iLogger";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

    private readonly logger: iLogger = new iLogger()

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();

        this.logger.error(exception.message, request.url)
        response
            .status(status)
            .json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
                message: exception.message,
                extend: exception.getResponse() ? exception.getResponse() : ""
            });
    }
}