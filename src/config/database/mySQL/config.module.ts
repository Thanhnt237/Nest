import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { MysqlConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            validationSchema: Joi.object({
                APP_NAME: Joi.string().default('MyApp'),
                APP_ENV: Joi.string()
                    .valid('development', 'production', 'test', 'provision')
                    .default('development'),
                APP_URL: Joi.string().default('http://my-app.test'),
                APP_PORT: Joi.number().default(9000),
            }),
        }),
    ],
    providers: [ConfigService, MysqlConfigService],
    exports: [ConfigService, MysqlConfigService],
})
export class MysqlConfigModule {}