import {Injectable} from "@nestjs/common";
import {UsersEntity} from "../../users/entities/users.entity";
import constants from "../../../common/constants/constants";
import { pick as lodashPick } from 'lodash'
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtStrategyHelper{
    constructor(
        private readonly jwtService: JwtService
    ) {
    }

    async createTokens(user: UsersEntity, _pick = lodashPick): Promise<Array<string>> {
        const token = this.jwtService.sign(
            {
                user: _pick(user, ['ID']),
            },
            {
                secret: process.env.SECRET_TOKEN,
                expiresIn: constants.TOKEN_EXPIRES_TIME,
            },
        );

        const refreshToken = this.jwtService.sign(
            {
                user: _pick(user, 'ID'),
            },
            {
                secret: process.env.REFRESH_SECRET_TOKEN,
                expiresIn: constants.REFRESH_TOKEN_EXPIRES_TIME,
            },
        );

        return [token, refreshToken];
    }
}