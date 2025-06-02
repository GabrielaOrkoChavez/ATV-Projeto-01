require("dotenv").config(); 

const db = require("./db");

const port = process.env.PORT;

const express = require('express');

const app = express();

app.use(express.json());

// Rota para listar todos os clientes
app.get('/client', async (req, res) => {
// Chama a função que seleciona os clientes no banco de dados
const clientes = await db.selectCustomers();
// Envia a resposta em formato JSON contendo os clientes
res.json(clientes);
});

app.post('/client', async (req, res) => {
    // O objeto req.body contem os dados enviados pelo cliente na requisição POST
    await db.insertCustomer(req.body);
    // Envia o status 201 para indicar que um novo recurso foi criado com sucesso
    res.sendStatus(201);
});

app.listen(port);

console.log("Backend Rodando!")