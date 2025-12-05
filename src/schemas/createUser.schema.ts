import { z } from "zod";
import { ICreateUserDTORequest } from "../dto/user.dto";

export const createUserSchema: z.ZodType<ICreateUserDTORequest> = z.object({
  name: z.string().min(3, "Nome precisa ter no mínimo 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  username: z.string().min(3, "Username precisa ter no mínimo 3 caracteres"),
  password: z.string().min(8, "Senha precisa ter no mínimo 6 caracteres"),
});
