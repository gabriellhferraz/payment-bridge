import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Unique, UpdateDateColumn } from "typeorm";
import { User } from "../interfaces/entityInterfaces/user.interface";

@Entity("users")
@Unique("uq_users_email", ["email"])
@Unique("uq_users_username", ["username"])
export class UserEntity implements User {
  @PrimaryGeneratedColumn("identity", {type: "bigint", primaryKeyConstraintName: "pk_users_id"})
  id!: Number;

  @Column({ type: "varchar", length: 60, nullable: false})
  username!: string;

  @Column({ type: "varchar", nullable: false,})
  name!: string;

  @Column({ type: "varchar", length: 320, nullable: false })
  email!: string;

  @Column({type: "varchar", length: 255, nullable: false})
  password!: string;

  @CreateDateColumn({type: "timestamp"})
  created_at!: Date;

  @UpdateDateColumn({type: "timestamp"})
  updated_at!: Date;
}
