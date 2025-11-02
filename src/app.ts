import express from "express";
import routes from "./routes/routes";

const port = 3000;
const app = express();

app.use("/api", routes);

app.listen(port, () =>{
    console.log(`Server running at port ${port}`);
});

export default  app;
