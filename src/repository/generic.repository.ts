import {  EntityTarget, ObjectLiteral} from "typeorm";
import { IGenericRepository } from "../interfaces/repository/genericRepository.interface";
import { AppDataSource } from "../database/data-source";

export abstract class GenericRepository<T extends ObjectLiteral> implements IGenericRepository<T> {

    protected readonly repository;

    protected constructor(entity: EntityTarget<T>) {
        this.repository = AppDataSource.getRepository<T>(entity);
    }

    findAll(): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<T> {
        throw new Error("Method not implemented.");
    }
    create(data: T): Promise<T> {
        const createdEntity = this.repository.create(data);
        return this.repository.save(createdEntity);
    }
    update(id: number): Promise<T> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}