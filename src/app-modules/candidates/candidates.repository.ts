import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {DataSource, Repository} from "typeorm";
import {CandidatesEntity} from "./entities/candidates.entity";
import {iLogger} from "../../common/utils/logger/iLogger";

@Injectable()
export class CandidatesRepository extends Repository<CandidatesEntity>{
    constructor(
        private readonly dataSource: DataSource,
        private readonly logger: iLogger
    ) {
        super(CandidatesEntity, dataSource.createEntityManager());
    }

    async getOrderCodeIndex(){
        try {
            return this.createQueryBuilder("candidate")
                .select("candidate.OrderCode")
                .orderBy("candidate.OrderCode", "DESC")
                .limit(1)
                .getOne()
        }catch(error){
            throw error
        }
    }

    async getCandidates(input: any): Promise<Array<CandidatesEntity>>{
        let {ID, limit = 15, page = 1} = input

        let offset = (page-1)*limit;
        let expandCondition = {
            IsActive: true
        }

        if(ID){
            expandCondition["ID"] = ID
        }

        try {
            return this.createQueryBuilder()
                .from(CandidatesEntity, 'candidate')
                .where(expandCondition)
                .select("candidate")
                .limit(limit)
                .offset(offset)
                .getMany()
        }catch (error){
            throw error
        }
    }

    async addNewCandidates(input: Array<any>): Promise<any>{
        try {
            let result = await this.createQueryBuilder().insert().into(CandidatesEntity).values(input).execute()
            return result.generatedMaps
        }catch(error){
            this.logger.error(error.message)
            throw new HttpException(error.message, HttpStatus.CONFLICT)
        }
    }

    async updateCandidate(input: any): Promise<any>{
        let {condition, data} = input

        try {
            await this.createQueryBuilder()
                .update(CandidatesEntity)
                .set(data)
                .where(condition)
                .execute()
        }catch(error){
            this.logger.error(error.message)
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

}