import {Exclude, Expose} from 'class-transformer';
import {UsersInterface} from '../interfaces/users.interface';

export class UserSerializer implements UsersInterface {
    ID: string;
    Email: string;

    @Expose()
    Name: null | string;

    @Exclude()
    Password: string;

    @Exclude()
    CreatedAt: Date;

    @Exclude()
    UpdatedAt: Date;

    constructor(partial: Partial<UserSerializer>) {
        Object.assign(this, partial);
    }
}