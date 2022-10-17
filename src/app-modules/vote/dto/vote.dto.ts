import {VoteInterface} from "../interfaces/vote.interface";
import {Allow, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class VoteDto implements VoteInterface{
    CANDIDATE_ID: string;
    Point: number;
    USER_ID: string;
}

export class AddVoteDto {
    @IsString()
    @IsNotEmpty()
    USER_ID?: string

    @IsString()
    @IsNotEmpty()
    CANDIDATE_ID? : string

    @IsNumber()
    @IsNotEmpty()
    Point?: string
}

export class GetVotedForCandidateDto {
    @IsNotEmpty()
    @IsString()
    CANDIDATE_ID: string

    @Allow()
    limit: number

    @Allow()
    page: number
}