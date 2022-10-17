import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import {DatabasesProvidersModule} from "./providers/databases/index.provider.module";
import {UsersModule} from "./app-modules/users/users.module";
import {LoggerModule} from "./common/utils/logger/iLogger.module"
import {LoggerApiMiddleware} from "./common/middlewares/logging-api.middleware";
import {AuthModule} from "./app-modules/auth/auth.module";
import {APP_FILTER} from "@nestjs/core";
import {HttpExceptionFilter} from "./common/exceptions/filter/http-exception.filter";
import {AppConfigModule} from "./config/app/config.module";
import {AllAppModule} from "./common/constants/all-app.module";

@Module({
  imports: [
      AppConfigModule,
      AllAppModule,
      DatabasesProvidersModule,
      LoggerModule,
  ],
  controllers: [AppController],
  providers: [
      AppService,
      {
          provide: APP_FILTER,
          useClass: HttpExceptionFilter,
      }
  ],
})
export class AppModule implements NestModule{
    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(LoggerApiMiddleware).forRoutes('*')
    }
}
