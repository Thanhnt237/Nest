import { UserSerializer } from "../../users/serializers/user.serializer";

export interface CommonAuthInterface {
    accessToken: string
    user?: UserSerializer
}