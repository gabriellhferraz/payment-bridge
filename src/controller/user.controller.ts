import { Request, Response } from "express";

export class UserController {
  async create(req: Request, res: Response) {
    // Lógica para criar um usuário
    return res.status(201).json({ message: "Usuário criado com sucesso!" });
  }
}