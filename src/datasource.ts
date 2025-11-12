import "reflect-metadata";
import { DataSource } from "typeorm";
import { CustomerEntity } from "./entity/customer.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "payment",
  synchronize: true, // apenas para desenvolvimento
  entities: [CustomerEntity],
});
