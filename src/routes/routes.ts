import { Router } from "express";
import HealthController from "../controller/health.controller";

const routes = Router();

routes.get('/health', HealthController.getHealth);

export default routes;