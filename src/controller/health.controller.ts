import { Request, Response } from "express";

export default class HealthController {
    static getHealth(req: Request, res: Response){
        return res.json({ status: "Online ✅" });
    }
}