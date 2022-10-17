import {Injectable} from "@nestjs/common";
import {VoteEntity} from "./entities/vote.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {VoteRepository} from "./vote.repository";

@Injectable()
export class VoteService{
    constructor(
        @InjectRepository(VoteRepository)
        private readonly voteRepository: VoteRepository
    ) {
    }

    async getVote(input?: any): Promise<Array<VoteEntity>>{
        return await this.voteRepository.getVotes()
    }

    async vote(input: any): Promise<VoteEntity>{
        return await this.voteRepository.addVote(input)
    }

    async getAllVotedForCandidate(input: any): Promise<Array<VoteEntity>>{
        let result = await this.voteRepository.getUserVotedForCandidate(input)
        return result.map(c => ({
            USER_ID: c.USER_ID,
            Point: c.Point
        }))
    }
}