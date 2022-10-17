import {IsBoolean, IsEmail, IsString} from "class-validator";
import {UsersInterface} from "../interfaces/users.interface";

export class UpdateUserDTO implements UsersInterface{
    @IsEmail()
    Email?: string

    @IsString()
    Name?: null | string

    @IsString()
    Password?: string

    @IsString()
    Role?: string

    @IsString()
    Vote?: string

    @IsBoolean()
    IsActive?: boolean
}