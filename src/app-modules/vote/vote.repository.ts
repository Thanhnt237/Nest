import {
    ClassSerializerInterceptor,
    HttpException,
    HttpStatus,
    Injectable,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import {DataSource, Repository} from "typeorm";
import {VoteEntity} from "./entities/vote.entity";
import {iLogger} from "../../common/utils/logger/iLogger";
import {JwtAuthGuard} from "../../common/guards/jwt-auth.guard";

@Injectable()
@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class VoteRepository extends Repository<VoteEntity>{
    constructor(
        private readonly dataSource: DataSource,
        private readonly logger: iLogger
    ) {
        super(VoteEntity, dataSource.createEntityManager());
    }

    async getVotes(input?: any): Promise<Array<VoteEntity>>{
        let expandCondition = {}

        if(input){
            let {
                ID,
                limit = 15,
                page = 1
            } = input;

            if(ID){
                expandCondition["ID"] = ID
            }
        }

        try {
            return await this.createQueryBuilder("vote")
                .from(VoteEntity, 'v')
                .where(expandCondition)
                .select("*")
                .limit(10)
                .offset(1)
                .getMany()

        }catch (error){
            throw error
        }
    }

    async getUserVotedForCandidate(input: any): Promise<any>{
        let {limit = 15, page = 1, CANDIDATE_ID} = input

        let offset = (page-1)*limit
        let voteCondition = {
            // IsActive: true
        }

        if(CANDIDATE_ID){
            voteCondition["CANDIDATE_ID"] = CANDIDATE_ID
        }

        try {
            return await this.createQueryBuilder('vote')
                .where(voteCondition)
                .leftJoinAndSelect("vote.USER_ID", "user")
                .getMany()
        }catch(error){
            throw error
        }
    }

    async addVote(input: Array<any>): Promise<any>{
        try {
            let result = await this.createQueryBuilder()
                .insert()
                .into(VoteEntity)
                .values(input)
                .execute()
            return result.generatedMaps
        }catch(error){
            this.logger.error(error.message)
            throw new HttpException(error.message, HttpStatus.CONFLICT)
        }
    }

    async updateVote(input: any): Promise<any>{
        let {condition, data} = input

        try {
            await this.createQueryBuilder()
                .update(VoteEntity)
                .set(data)
                .where(condition)
                .execute()
        }catch(error){
            this.logger.error(error.message)
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}