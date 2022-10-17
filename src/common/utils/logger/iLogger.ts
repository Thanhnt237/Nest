import {ConsoleLogger, Injectable, LoggerService} from "@nestjs/common";

@Injectable()
export class iLogger extends ConsoleLogger implements LoggerService{}