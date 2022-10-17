import {Module} from "@nestjs/common";
import {VoteController} from "./vote.controller";
import {VoteService} from "./vote.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {iCommonModule} from "../../common/module/common-module/common.module";
import {VoteRepository} from "./vote.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([VoteRepository]),
        iCommonModule
    ],
    controllers: [VoteController],
    providers: [
        VoteService,
        VoteRepository
    ],
    exports: [VoteModule]
})

export class VoteModule{

}