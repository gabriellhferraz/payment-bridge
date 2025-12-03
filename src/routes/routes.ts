import { Router } from "express";
import HealthController from "../controller/health.controller";
import { UserController } from "../controller/user.controller";

const routes = Router();

routes.get('/health', HealthController.getHealth);

const userController = new UserController();
routes.post('/users', userController.create);

export default routes;