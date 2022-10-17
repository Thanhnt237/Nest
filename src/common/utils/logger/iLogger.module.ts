import {Module} from "@nestjs/common";
import {iLogger} from "./iLogger";

@Module({
    providers: [iLogger],
    exports: [iLogger]
})
export class LoggerModule{}