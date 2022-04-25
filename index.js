const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (request, response) => {
    response.json({
        message: "API rodando lindamente"
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});