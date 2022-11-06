import express from "express";
import cors from "cors";

const app = express();

app.get("/teste", (req, res) => {res.send("rodando um testezinho ne pae")})

app.listen(4000, () => console.log("App running in port: 4000"));