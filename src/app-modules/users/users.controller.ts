import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get, Param,
    ParseArrayPipe,
    Post, Put,
    Query, UseGuards,
    UseInterceptors
} from "@nestjs/common";

import {UserSerializer} from './serializers/user.serializer';

import {UsersService} from "./users.service";
import {transformArrayEntitiesToSerializer} from "../../common/helpers/transform-serializer.helper";
import {JwtAuthGuard} from "../../common/guards/jwt-auth.guard";
import { FindByIDDto } from "../../common/dto/findOne.dto";
import { endpoint } from "../../common/constants/endpoint";
import {CreateUserDTO} from "./dto/add-users.dto";
import {UpdateUserDTO} from "./dto/update-user.dto";


@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
@Controller(endpoint.users_prefix)
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Get(endpoint.users_get_all_user)
    async getAllUser(): Promise<Array<UserSerializer>> {
        return transformArrayEntitiesToSerializer(await this.usersService.getAllUsers(), UserSerializer)
    }

    @Get(endpoint.users_get_user_by_ID)
    async getUserByID(
        @Query() input: FindByIDDto,
    ): Promise<Array<UserSerializer>>{
        return transformArrayEntitiesToSerializer(await this.usersService.getUser(input), UserSerializer)
    }


    @Post(endpoint.users_add_new_user)
    async addNewUser(
        @Body('data', new ParseArrayPipe({ items: CreateUserDTO }))
            data: CreateUserDTO[]
    ): Promise<UserSerializer> {
        return new UserSerializer(await this.usersService.addNewUser(data))
    }

    @Put(endpoint.users_update_user)
    async updateUser(
        @Param('ID') ID: string,
        @Body() input: UpdateUserDTO
    ): Promise<any>{
        return this.usersService.updateUser(ID, input)
    }

    @Post('test')
    test(
        @Body() input: UpdateUserDTO
    ): UserSerializer{
        console.log(input)
        return
        // return {
        //     ID: "123312",
        //     name: "thanh dep trai",
        //     email: "thanhnt@bytesoft.net",
        //     password: "fack",
        //     createdAt: new Date(),
        //     updatedAt: new Date()
        // }
    }
}