import "./database";
import"reflect-metadata";
import { router } from "./Routes";
import express from "express";

const app = express();
const port = 5000;
app.use(express.json())
app.use(router);

app.listen(port, () => console.log(`http://localhost:${port}`));