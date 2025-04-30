const express = require('express');
const path = require('path');
const fs = require('fs');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join( __dirname + "/index.html"));
    console.log("Hello World");
});


app.listen(port, () => {
    console.log(`Servidor executando em: http://localhost:${port}`);
})