import 'reflect-metadata';
import "./database";
import express, { request, response } from "express";

const app = express();

app.listen(5000, () => console.log("Server running"));

//http://localhost:5000/users
app.get('/',(request, response) => {
    return response.json({ message : "Hello Node, I'm from python" });
});

app.post('/', (request, response) => {
    return response.json({message : "Salvo com sucesso - by express!"});

});
