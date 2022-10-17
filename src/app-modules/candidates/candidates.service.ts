import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {CandidatesRepository} from "./candidates.repository";
import {CandidatesEntity} from "./entities/candidates.entity";
import {CandidatesDto, CreateCandidatesDto} from "./dto/candidates.dto";

@Injectable()
export class CandidatesService{
    constructor(
        @InjectRepository(CandidatesRepository)
        private readonly candidateRepository : CandidatesRepository
    ) {
    }

    async getCandidates(input) : Promise<Array<CandidatesEntity>>{
        return this.candidateRepository.getCandidates(input)
    }

    async createCandidates(input: Array<CreateCandidatesDto>): Promise<CandidatesEntity>{
        let result = await this.candidateRepository.getOrderCodeIndex()

        let index = 1;
        if(result && result.OrderCode){
            index = Number(JSON.parse(JSON.stringify(result.OrderCode))) + 1
        }
        let data = input.map(c => {
            let value = {
                ...c,
                OrderCode: index
            }
            index++;
            return value
        })
        return this.candidateRepository.addNewCandidates(data)
    }

    async updateCandidates(ID: string, data: CandidatesDto): Promise<CandidatesEntity>{
        let standardInput = {
            condition: {
                ID
            },
            data
        }
        return await this.candidateRepository.updateCandidate(standardInput)
    }
}