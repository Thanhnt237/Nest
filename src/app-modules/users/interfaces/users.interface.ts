import {TimestampInterfaces} from "../../../common/interfaces/timestamp.interfaces";

export interface UsersInterface extends TimestampInterfaces{
    Email?: string
    Name?: null | string
    Password?: string
    Role?: string
}