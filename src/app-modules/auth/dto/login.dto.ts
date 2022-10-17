import {IsNotEmpty} from "class-validator";
import { Expose } from "class-transformer";

export class LoginInputDTO {
    @IsNotEmpty()
    @Expose({
        name: "email"
    })
    readonly Email: string

    @IsNotEmpty()
    @Expose({
        name: "password"
    })
    readonly Password: string
}