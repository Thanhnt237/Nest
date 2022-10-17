import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {TableName} from "../../../common/constants/table-name";
import {CandidatesInterface} from "../interfaces/candidates.interface";

@Entity(TableName.candidates)
export class CandidatesEntity implements CandidatesInterface{
    @PrimaryGeneratedColumn('uuid')
    ID: string;

    @Column({
        type:"text"
    })
    Name: string;

    @Column({
        type: "text",
        nullable: true
    })
    Address: string;

    @Column({
        type: "int",
        unique: true
    })
    OrderCode: number;

    @Column({
        type: "int",
        nullable: true
    })
    Age: number;

    @Column({
        type: "text",
        nullable: true
    })
    Hobby: string;

    @Column({
        type: "boolean",
        default: true
    })
    IsActive: boolean;

    @CreateDateColumn({
        type: "timestamp"
    })
    CreatedAt: Date;

    @UpdateDateColumn({
        type: "timestamp"
    })
    UpdatedAt: Date;
}