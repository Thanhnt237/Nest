import {Module} from "@nestjs/common";
import {MysqlDatabaseProviderModule} from "./mySQL/provider.module";

@Module({
    imports: [
        MysqlDatabaseProviderModule
    ]
})
export class DatabasesProvidersModule{}