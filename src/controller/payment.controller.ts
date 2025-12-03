import { Request, Response } from "express";

class PaymentController {
    async CreatePayment(req: Request, res: Response) {
        // Lógica para criar um pagamento
        return res.status(201).json({ message: "Pagamento criado com sucesso!" });
    }
}