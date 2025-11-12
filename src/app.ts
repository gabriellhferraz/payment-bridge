import express from "express";
import routes from "./routes/routes";
import { AppDataSource } from "./datasource";
import 'dotenv/config';
import "reflect-metadata"

const port = process.env.APP_PORT;
const app = express();

app.use("/api", routes);

AppDataSource.initialize()
    .then(() => {
        console.log("✅ Banco de dados conectado com sucesso!");
        
        app.listen(port, () => {
            console.log("🚀 Servidor rodando em http://localhost:3000");
        });
    })
    .catch((err) => {
        console.error("❌ Erro ao conectar com o banco:", err);
    });

export default app;
