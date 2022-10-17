import {Module} from "@nestjs/common";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {UsersModule} from "../users/users.module"
import {JwtModule} from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./local.strategy";
import {JwtStrategyHelper} from "./helpers/jwt-strategy.helper";
import {JwtStrategy} from "./jwt.strategy";

@Module({
    imports: [
        UsersModule,
        JwtModule,
        PassportModule,
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
        JwtStrategyHelper,
    ],
    exports: [AuthModule]
})

export class AuthModule{}