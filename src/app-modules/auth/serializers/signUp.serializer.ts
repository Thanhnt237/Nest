import {CommonAuthInterface} from "../interfaces/auth.interface";
import {UserSerializer} from "../../users/serializers/user.serializer";

export class SignUpSerializer implements CommonAuthInterface{

    accessToken: string

    user: UserSerializer

    constructor(partial: Partial<SignUpSerializer>) {
        Object.assign(this, partial);
    }
}