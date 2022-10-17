import { Module } from "@nestjs/common";
import { AuthModule } from "../../app-modules/auth/auth.module";
import { UsersModule } from "../../app-modules/users/users.module";
import {VoteModule} from "../../app-modules/vote/vote.module";
import {CandidatesModule} from "../../app-modules/candidates/candidates.module";
import {MediaModule} from "../../app-modules/media/media.module";

const appModule = [
  AuthModule,
  UsersModule,
  VoteModule,
  CandidatesModule,
  MediaModule
]

@Module({
  imports: appModule,
  exports: appModule
})
export class AllAppModule{}