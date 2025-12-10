import { Request, Response } from "express";
import { ICreateUserDTORequest } from "../dto/user.dto";
import { createUserSchema } from "../schemas/createUser.schema";
import { UserService } from "../services/user.service";

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const data: ICreateUserDTORequest = createUserSchema.parse(req.body);


      const userService = new UserService();
      await userService.createUser(data);

      return res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });

      if (error.name === "ZodError")
        return res.status(400).json({ errors: error.issues });
    }
  }
}