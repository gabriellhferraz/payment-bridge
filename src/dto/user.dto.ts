export interface ICreateUserDTORequest {
    name: string;
    email: string;
    username: string;
    password: string;
}

export interface IUpdateUserDTORequest {
    name?: string;
    email?: string;
    username?: string;
    password?: string;
}

export interface ICreateUserDTOResponse {
    id: Number;
    name: string;
    email: string;
    username: string;
    created_at: Date;
    updated_at: Date;
}