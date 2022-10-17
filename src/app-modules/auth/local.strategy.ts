import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import {UsersEntity} from "../users/entities/users.entity";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            usernameField: "email"
        });
    }

    async validate(username: string, password: string): Promise<UsersEntity> {
        console.log(username)
        const user = await this.authService.validateUsers(username, password);
        if (!user) {
            throw new UnauthorizedException('Unknown error');
        }
        return user;
    }
}