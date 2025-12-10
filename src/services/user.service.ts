import { ICreateUserDTORequest, ICreateUserDTOResponse, IUpdateUserDTORequest } from "../dto/user.dto";
import { UserRepository } from "../repository/user.repository";

export class UserService {

    async createUser(data: ICreateUserDTORequest): Promise<ICreateUserDTOResponse> {
        const userRepository = new UserRepository();
        return await userRepository.create(data as any);
    }

    async updateUser(id: number, data: IUpdateUserDTORequest): Promise<void> {
        throw new Error("Method not implemented.");
    }   

    async getUserById(id: number): Promise<ICreateUserDTOResponse> {
        throw new Error("Method not implemented.");
    }   

    async deleteUser(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}   