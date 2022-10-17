import {VoteInterface} from "../interfaces/vote.interface";
import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {UsersEntity} from "../../users/entities/users.entity";
import {TableName} from "../../../common/constants/table-name";
import {CandidatesEntity} from "../../candidates/entities/candidates.entity";

@Entity({name: TableName.votes})
export class VoteEntity implements VoteInterface{
    @PrimaryGeneratedColumn('uuid')
    ID: string

    @ManyToOne(() => UsersEntity, users => users.ID)
    @Column({
        type: "uuid"
    })
    USER_ID: string

    @ManyToOne(() => CandidatesEntity, candidates => candidates.ID)
    @Column({
        type: "uuid"
    })
    CANDIDATE_ID: string;

    @Column({
        type: "int"
    })
    Point: number;

    @CreateDateColumn({
        name: 'created_at'
    })
    CreatedAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp'
    })
    UpdatedAt: Date;
}