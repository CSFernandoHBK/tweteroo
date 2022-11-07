import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const dadosUsuarios = [
    {username: "frodo", avatar:"https://static.wikia.nocookie.net/senhordosaneisemportugues/images/e/e6/ImagesCADWY2QL.jpg/revision/latest?cb=20120106073318&path-prefix=pt-br"},
    {username: "bobesponja", avatar: "https://yt3.ggpht.com/ytc/AMLnZu9tYPIG3bxki2LZz-NRrvHtLHRL0-wW95Cjgcr2=s900-c-k-c0x00ffffff-no-rj"},
    {username: "naruto", avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"}
];

const tweets = [{username: "frodo", tweet: "vamos atras do anel neh"},
{username: "bobesponja", tweet: "hamburger de siri"},
{username: "naruto", tweet: "meu jeito ninja de ser"}]

app.post("/sign-up", (req, res) => {
    const dadosUser = req.body;
    dadosUsuarios.push(dadosUser);
    res.send(dadosUser)
})

app.post("/tweets", (req, res) => {
    const dadosTweet = req.body;
    tweets.push(dadosTweet);
    res.send(tweets);
})

app.get("/tweets", (req, res) => {

    res.send(tweets)
})

app.listen(5000, () => console.log("App running in port: 5000"));