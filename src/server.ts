import app from "./app";
import { AppDataSource } from "./database/data-source";
const port = process.env.APP_PORT!;

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