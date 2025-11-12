import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Customer } from "../interfaces/customer.interface";

@Entity({ name: "customer" })
export class CustomerEntity implements Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: "cpj_cnpj" })
  cpfCnpj: string;
}
