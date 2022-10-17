import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn, OneToMany
} from "typeorm";

import { UsersInterface } from '../interfaces/users.interface';
import {TableName} from "../../../common/constants/table-name";
import {Exclude} from "class-transformer";

@Entity({ name: TableName.users })
export class UsersEntity implements UsersInterface {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

  @Column({
    type: "text",
    nullable: false
  })
  Name: string;

  @Column({
    type: "varchar",
    length: 50,
    unique: true,
    nullable: true
  })
  Email: string;

  @Exclude()
  @Column({
    type: "varchar",
    length: 220,
    nullable: false
  })
  Password: string;

  @Column({
    type: "varchar",
    length: 10,
    nullable: true
  })
  Phone: string;

  @Column({
    type: "varchar",
    length: 20,
    nullable: true,
    default: "MEMBER"
  })
  Role: string;

  @Column({
    type: "varchar",
    length: 20,
    nullable: true
  })
  Vote: string;

  @CreateDateColumn({
    name: 'created_at'
  })
  CreatedAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp'
  })
  UpdatedAt: Date;

  @Column({
    type: "boolean",
    default: true
  })
  IsActive: boolean;
}