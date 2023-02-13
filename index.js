import express from "express";
import bodyParser from "body-parser";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sss from "shamirs-secret-sharing";

const app = express();
const PORT = 8080;
const __dirname = dirname(fileURLToPath(import.meta.url));
// const recovered = sss.combine(shares.slice(3, 7))
// console.log(recovered.toString())


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "/index.html"));
});

app.listen(8080);