import {IsEmail, IsNotEmpty, IsString} from "class-validator";
import {UsersInterface} from "../interfaces/users.interface";

export class AddNewUsersDTO {
    @IsNotEmpty()
    readonly data: [CreateUserDTO]
}

export class CreateUserDTO implements UsersInterface{

    readonly ID?: string

    @IsNotEmpty()
    @IsEmail()
    readonly Email: string

    @IsNotEmpty()
    Password: string

    @IsString()
    readonly Name?: string
}
