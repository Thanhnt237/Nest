import {Module} from "@nestjs/common";
import {iCommonModule} from "../../common/module/common-module/common.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CandidatesController} from "./candidates.controller";
import {CandidatesService} from "./candidates.service";
import {CandidatesRepository} from "./candidates.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([CandidatesModule]),
        iCommonModule
    ],
    controllers: [CandidatesController],
    providers: [
        CandidatesService,
        CandidatesRepository
    ]
})
export class CandidatesModule{}