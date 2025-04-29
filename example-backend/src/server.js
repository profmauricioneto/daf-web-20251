const express = require('express');
const app = express();
const produtoRoutes = require('./routes/productRoutes');
const logger = require('./middleware/logger');

const PORT = 3000;

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
    res.send('<h1>Testando a API de Produtos</h1>');
});

app.use('/products', produtoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
