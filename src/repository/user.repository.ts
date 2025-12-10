import { GenericRepository } from "./generic.repository";
import { UserEntity } from "../entity/user.entity";
import { ICreateUserDTOResponse } from "../dto/user.dto";

export class UserRepository extends GenericRepository<UserEntity> {
    constructor() {
        super(UserEntity);
    }

    create(data: UserEntity): Promise<UserEntity> {
        return super.create(data);
    }

}