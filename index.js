import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const tweets = [{username: "fernando", tweet: "meu nome eh esse mesmo"},
{username: "ata", tweet: "meu nome eh esse mesmo"},
{username: "tata", tweet: "meu nome eh esse mesmo"}]

app.post("/sign-up", (req, res) => {console.log(req.body)})

app.get("/tweets", (req, res) => {
    res.send(tweets)})

app.listen(5000, () => console.log("App running in port: 5000"));