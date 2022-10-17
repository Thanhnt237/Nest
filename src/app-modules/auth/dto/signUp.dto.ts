import {IsEmail, IsNotEmpty} from "class-validator";
import {Expose} from "class-transformer";

export class SignUpDTO {
    @IsNotEmpty()
    @IsEmail()
    @Expose({name: "email"})
    readonly Email: string

    @IsNotEmpty()
    @Expose({
        name: "password"
    })
    readonly Password: string

    @IsNotEmpty()
    @Expose({
        name: "name"
    })
    readonly Name: string
}