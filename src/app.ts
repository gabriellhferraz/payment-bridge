import express from "express";
import routes from "./routes/routes";
import 'dotenv/config';
import "reflect-metadata"

const app = express();

app.use("/api", routes);

export default app;
