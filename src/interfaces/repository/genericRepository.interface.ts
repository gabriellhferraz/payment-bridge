export interface IGenericRepository<T> {
    findAll(): Promise<T[]>;
    findById(id: Number): Promise<T>;
    create(data: T): Promise<T>;
    update(id: Number): Promise<T>;
    delete(id: Number): Promise<boolean>;
}