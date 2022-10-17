import {UsersInterface} from "../interfaces/users.interface";

export class UserDto implements UsersInterface{
    readonly ID?: string
    Email?: string;
    Name?: string | null;
    Password?: string;
    Role?: string;
}