import {
    Body,
    ClassSerializerInterceptor,
    Controller, Get,
    Param,
    ParseArrayPipe,
    Post,
    Put,
    Query,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import {endpoint} from "../../common/constants/endpoint";
import {CandidatesDto, CreateCandidatesDto, GetCandidatesDto} from "./dto/candidates.dto";
import {CandidatesService} from "./candidates.service";
import {CandidatesSerializer} from "./serializers/candidates.serializer";
import {JwtAuthGuard} from "../../common/guards/jwt-auth.guard";
import {FindByIDDto} from "../../common/dto/findOne.dto";
import {transformArrayEntitiesToSerializer} from "../../common/helpers/transform-serializer.helper";

@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
@Controller(endpoint.candidates_prefix)
export class CandidatesController{
    constructor(
        private readonly candidateService: CandidatesService
    ) {
    }

    @Post(endpoint.candidates_get_all)
    async getAllCandidates(
        @Query() input: GetCandidatesDto
    ): Promise<Array<CandidatesSerializer>>{
        return await this.candidateService.getCandidates(input)
    }

    @Get(endpoint.candidates_get_by_ID)
    async getCandidatesByID(
        @Query('ID') ID: string
    ){
        return transformArrayEntitiesToSerializer(await this.candidateService.getCandidates({ID}), CandidatesSerializer)
    }

    @Post(endpoint.candidates_add_new)
    async addNewCandidates(
        @Body() input: CreateCandidatesDto
    ): Promise<CandidatesSerializer>{
        return new CandidatesSerializer(await this.candidateService.createCandidates([input]))
    }

    @Post(endpoint.candidates_import)
    async importCandidates(
        @Body('data', new ParseArrayPipe({items: CreateCandidatesDto})) data: CreateCandidatesDto[]
    ): Promise<CandidatesSerializer>{
        console.log(data)
        return new CandidatesSerializer(await this.candidateService.createCandidates(data))
    }

    @Put(endpoint.candidates_update)
    async updateCandidates(
        @Param('ID') ID: string,
        @Body() data: CandidatesDto
    ) : Promise<CandidatesSerializer>{
        return new CandidatesSerializer(await this.candidateService.updateCandidates(ID, data))
    }

}