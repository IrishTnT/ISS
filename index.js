import express from "express";
import bodyParser from "body-parser";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import secrets from "secrets.js-grempe";

const app = express();
const PORT = 8080;
const __dirname = dirname(fileURLToPath(import.meta.url));
// const recovered = sss.combine(shares.slice(3, 7))
// console.log(recovered.toString())


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "/index.html"));
});

app.get("/generate", (req, res) => {
    let shares = Number(req.query.shares);
    let threshold = Number(req.query.threshold);
    let secret = secrets.str2hex(req.query.secret);
    
    let generated = secrets.share(secret, shares, threshold);

    res.send(generated);
});

app.get("/decode", (req, res) => {
    let shares = (req.query.shares).split("\r\n");

    let combined = secrets.combine(shares);
    let recovered = secrets.hex2str(combined);

    console.log(shares);

    res.send(recovered);
});

app.listen(8080);