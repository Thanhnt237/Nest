import {CandidatesInterface} from "../interfaces/candidates.interface";

export class CandidatesSerializer implements CandidatesInterface{
    Address: string;
    Age: number;
    CreatedAt: Date;
    Hobby: string;
    ID: string;
    IsActive: boolean;
    Name: string;
    OrderCode: number;
    UpdatedAt: Date;

    constructor(partial: Partial<CandidatesSerializer>) {
        Object.assign(this, partial)
    }
}