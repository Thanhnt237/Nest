import {TimestampInterfaces} from "../../../common/interfaces/timestamp.interfaces";

export interface VoteInterface extends TimestampInterfaces{
    USER_ID: string
    CANDIDATE_ID: string
    Point: number
}