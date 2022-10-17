import {ExecutionContext, Injectable} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {Reflector} from "@nestjs/core";
import constants from "../constants/constants";

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    constructor(private reflector: Reflector) {
        super();
    }

    canActivate(context: ExecutionContext) {
        const isPublic = this.reflector.getAllAndOverride<boolean>(constants.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        return super.canActivate(context);
    }
}