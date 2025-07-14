const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello do Kubernets!");
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});