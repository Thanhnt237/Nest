import {Injectable, UseGuards} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UsersRepository} from './users.repository';
import {UserDto} from "./dto/users.dto";
import {UsersEntity} from "./entities/users.entity";
import {JwtAuthGuard} from "../../common/guards/jwt-auth.guard";
import {CreateUserDTO} from "./dto/add-users.dto";
import {UpdateUserDTO} from "./dto/update-user.dto";
import {hashingPassword} from "../../common/helpers/hashing-password.helper";

@Injectable()
@UseGuards(JwtAuthGuard)
export class UsersService {
    constructor(
        @InjectRepository(UsersRepository)
        private readonly usersRepository: UsersRepository
    ) {}

    async getAllUsers(): Promise<Array<UsersEntity>>{
        return await this.usersRepository.getUser()
    }

    async getUser(
        input: UserDto
    ): Promise<Array<UsersEntity>> {
        return await this.usersRepository.getUser(input)
    }

    async addNewUser(input: Array<CreateUserDTO>): Promise<UsersEntity> {
        for (const item of input) {
            if(item.Password) item.Password = await hashingPassword(item.Password)
        }
        return await this.usersRepository.addNewUser(input)
    }

    async updateUser(
        ID: string,
        data: UpdateUserDTO
    ): Promise<any>{
        let standardInput = {
            condition: {
                ID
            },
            data
        }
        return await this.usersRepository.updateUser(standardInput)
    }

}