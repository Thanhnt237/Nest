import { DatabaseType } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { MysqlConfigModule } from '../../../config/database/mySQL/config.module';
import { MysqlConfigService } from '../../../config/database/mySQL/config.service';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [MysqlConfigModule],
            useFactory: async (mysqlConfigService: MysqlConfigService) => ({
                type: 'mysql' as DatabaseType,
                host: mysqlConfigService.host,
                port: mysqlConfigService.port,
                username: mysqlConfigService.username,
                password: mysqlConfigService.password,
                database: mysqlConfigService.database,
                synchronize: true,
                logging:true,
                entities: ["dist/app-modules/**/*.entity{.ts,.js}"],
                migrations: [
                    // "src/databases/migrations/*.ts",
                    // "dist/databases/migrations/*{.ts,.js}"
                ],
                extra: {
                    charset: "utf8mb4_unicode_ci",
                    nullable: true
                }
            }),
            cli: {
                migrationsDir: "./src/databases/migrations"
            },
            inject: [MysqlConfigService],
        } as TypeOrmModuleAsyncOptions),
    ],
})
export class MysqlDatabaseProviderModule {}