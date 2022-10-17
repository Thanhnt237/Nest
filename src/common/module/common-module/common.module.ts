import {Module} from "@nestjs/common";
import {LoggerModule} from "../../utils/logger/iLogger.module";

@Module({
    imports: [LoggerModule],
    exports: [LoggerModule]
})
export class iCommonModule{}