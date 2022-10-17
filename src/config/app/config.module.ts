import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { AppConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            validationSchema: Joi.object({
                APP_NAME: Joi.string().default('Nest'),
                NODE_ENV: Joi.string()
                    .valid('local','development', 'production', 'test', 'provision')
                    .default('local'),
                APP_PORT: Joi.number().default(8080),
                SECRET_TOKEN: Joi.string(),
                REFRESH_SECRET_TOKEN: Joi.string()
            }),
        }),
    ],
    providers: [ConfigService, AppConfigService],
    exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}