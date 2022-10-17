import {DataSource, Repository} from "typeorm";
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {UsersEntity} from "./entities/users.entity";
import {UserDto} from "./dto/users.dto";
import {iLogger} from "../../common/utils/logger/iLogger";

@Injectable()
export class UsersRepository extends Repository<UsersEntity>{

    constructor(
        private readonly dataSource: DataSource,
        private readonly logger: iLogger
    ) {
        super(UsersEntity, dataSource.createEntityManager());
    }

    async getUser(input?: UserDto): Promise<Array<UsersEntity>>{
        let expandCondition = {}

        if(input){
            let {ID, Email} = input;

            if(ID){
                expandCondition["ID"] = ID
            }

            if(Email){
                expandCondition["Email"] = Email
            }
        }

        try {
            console.log(input)
            return await this.find({
                where: expandCondition
            })
        }catch (error){
            throw error
        }
    }

    async addNewUser(input: Array<any>): Promise<any>{
        try {
            let result = await this.createQueryBuilder().insert().into(UsersEntity).values(input).execute()
            return result.generatedMaps
        }catch(error){
            this.logger.error(error.message)
            throw new HttpException(error.message, HttpStatus.CONFLICT)
        }
    }

    async updateUser(input: any): Promise<any>{
        let {condition, data} = input

        try {
            await this.createQueryBuilder()
                .update(UsersEntity)
                .set(data)
                .where(condition)
                .execute()
        }catch(error){
            this.logger.error(error.message)
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}