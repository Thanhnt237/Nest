import { CommonAuthInterface } from "../interfaces/auth.interface";
import { UserSerializer } from "../../users/serializers/user.serializer";
import { Exclude, Transform, Type } from "class-transformer";
import { values } from "lodash";


export class LoginSerializer {

    accessToken: string

    @Type(() => UserSerializer)
    user: {
        ID: string
        Name: string
        UserName: string
        Email: string
    }

    constructor(partial: Partial<LoginSerializer>) {
        Object.assign(this, partial);
    }
}