import { Request, Response } from "express";
import { ICreateUserDTORequest } from "../dto/user.dto";
import { createUserSchema } from "../schemas/createUser.schema";

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const data: ICreateUserDTORequest = createUserSchema.parse(req.body);

      const userData = req.body;

      return res.status(201).json({ message: "Usuário criado com sucesso!", body: userData });
    } catch (error: any) {
      return res.status(400).json({
        errors: error.issues
      });
    }

  }
}