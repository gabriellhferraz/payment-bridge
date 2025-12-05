import express from "express";
import routes from "./routes/routes";
import 'dotenv/config';
import "reflect-metadata"

const app = express();
app.use(express.json());
app.use(express.json({ limit: '50mb' }));

app.use("/api", routes);

export default app;
