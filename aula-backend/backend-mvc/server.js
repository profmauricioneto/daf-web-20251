require('dotenv').config();
const express = require('express');
const routerUsuario = require('./routes/usuario.routes');
const routerProduto = require('./routes/produtos.routes')
const app = express();
const cors = require('cors'); 
const PORT = process.env.PORT || 3000;

const middlewareLogger = (req, res, next) => {
    console.log(`[${req.method} - ${req.url} - ${req.ip}]`);
    next();
}

app.use(middlewareLogger);
app.use(cors());
app.use(express.json());
app.use('/produtos', routerProduto);
app.use('/usuarios', routerUsuario);




app.listen(PORT, () => {
    console.log(`Servidor executando na porta: http://localhost:${PORT}`);
})