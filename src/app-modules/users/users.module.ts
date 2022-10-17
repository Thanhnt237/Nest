import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import {UsersController} from "./users.controller";
import {UsersRepository} from "./users.repository";
import {TypeOrmModule} from "@nestjs/typeorm";
import {iCommonModule} from "../../common/module/common-module/common.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([UsersRepository]),
        iCommonModule
    ],
    controllers: [UsersController],
    providers: [
        UsersService,
        UsersRepository
    ],
    exports: [UsersService],
})

export class UsersModule {}