import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import constants from '../../common/constants/constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            passReqToCallback: true,
            ignoreExpiration: false,
            secretOrKey: process.env.SECRET_TOKEN,
        });
    }

    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username };
    }
}