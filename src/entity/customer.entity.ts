import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';
import { Customer } from '../interfaces/entityInterfaces/customer.interface';

@Entity('customers')
@Unique('uq_customers_cpfCnpj', ['cpfCnpj'])
export class CustomerEntity  implements Customer {

    @PrimaryGeneratedColumn('identity', { type: 'bigint', primaryKeyConstraintName: 'pk_customers_id' })
    id!: number;
    
    @Column({ type: 'varchar', length: 100, nullable: false })
    name!: string;

    @Column({ type: 'varchar', length: 20, nullable: false })
    cpfCnpj!: string;

    @Column({ type: 'varchar', length: 320, nullable: false })
    email!: string;

    @Column({ type: 'varchar', length: 15, nullable: false })
    phone!: string;

    @Column({ type: 'varchar', length: 200, nullable: false })
    address!: string;

    @Column({ type: 'varchar', length: 20, nullable: false })
    addressNumber!: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    complement!: string;

    @Column({ type: 'varchar', length: 10, nullable: false })
    postalCode!: string;
}