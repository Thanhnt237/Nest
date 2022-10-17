import {VoteInterface} from "../interfaces/vote.interface";
import {UserSerializer} from "../../users/serializers/user.serializer";
import {Exclude, Expose} from "class-transformer";

export class VoteSerializer implements VoteInterface{
    CANDIDATE_ID: string;
    Point: number;
    USER_ID: string;

    constructor(partial: Partial<VoteSerializer>) {
        Object.assign(this, partial)
    }
}

export class UserVotedForCandidates {
    point: string

    @Exclude()
    ID: string

    @Expose({name: "User"})
    USER_ID: UserSerializer

    @Exclude()
    CreatedAt: Date

    @Exclude()
    UpdatedAt: Date
    constructor(partial: Partial<UserVotedForCandidates>) {
        Object.assign(this, partial)
    }
}