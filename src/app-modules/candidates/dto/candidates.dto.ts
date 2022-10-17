import {Allow, IsString} from "class-validator";
import {CandidatesInterface} from "../interfaces/candidates.interface";

export class CandidatesDto{
    @Allow()
    Address: string;

    @Allow()
    Age: number;

    @Allow()
    Hobby: string;

    @Allow()
    Name: string;

    @Allow()
    isLock: string;
}

export class GetCandidatesDto{
    @Allow()
    ID?: string

    @Allow()
    limit: string

    @Allow()
    page: string
}

export class CreateCandidatesDto implements CandidatesInterface{

    @Allow()
    Address: string;

    @Allow()
    Age: number;

    @Allow()
    Hobby: string;

    @Allow()
    Name: string;
}

export class UpdateCandidatesDto {
    @Allow()
    ID: string

    @Allow()
    Address: string;

    @Allow()
    Age: number;

    @Allow()
    Hobby: string;

    @Allow()
    Name: string;
}