import {Body, ClassSerializerInterceptor, Controller, Get, Post, Put, UseGuards, UseInterceptors} from "@nestjs/common";
import {VoteService} from "./vote.service";
import {endpoint} from "../../common/constants/endpoint";
import {VoteEntity} from "./entities/vote.entity";
import {AddVoteDto, GetVotedForCandidateDto} from "./dto/vote.dto";
import {JwtAuthGuard} from "../../common/guards/jwt-auth.guard";
import {UserVotedForCandidates, VoteSerializer} from "./serializers/vote.serializer";
import {UsersEntity} from "../users/entities/users.entity";
import {transformArrayEntitiesToSerializer} from "../../common/helpers/transform-serializer.helper";

@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
@Controller(endpoint.vote_prefix)
export class VoteController{
    constructor(
        private readonly voteService: VoteService
    ) {}

    @Get(endpoint.vote_get_recently_vote)
    async getRecentlyVote() : Promise<any>{
        return this.voteService.getVote()
    }

    @Post(endpoint.vote_get_vote_list)
    async getVoteList(
        @Body() input: any
    ) : Promise<any>{
        return
    }

    @Post(endpoint.vote_get_all_vote_for_candidate)
    async getAllVoteForCandidate(
        @Body() input: GetVotedForCandidateDto
    ): Promise<Array<UserVotedForCandidates>>{
        return transformArrayEntitiesToSerializer(await this.voteService.getAllVotedForCandidate(input), UserVotedForCandidates)
    }

    @Post(endpoint.vote_vote)
    async vote(
        @Body() input: AddVoteDto
    ): Promise<VoteSerializer>{
        return new VoteSerializer(await this.voteService.vote(input))
    }



    @Put(endpoint.vote_update_vote)
    async updateVote(): Promise<any>{
        return
    }
}