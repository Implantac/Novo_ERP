const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Configuração do ambiente
dotenv.config();

// Inicialização do app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Configuração básica das rotas
app.get('/', (req, res) => {
    res.json({ message: 'API da USE SISTEMAS funcionando!' });
});

// Rotas principais (serão implementadas posteriormente)
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/usuarios', require('./routes/usuarios.routes'));
app.use('/api/estoque', require('./routes/estoque.routes'));
app.use('/api/vendas', require('./routes/vendas.routes'));
app.use('/api/financeiro', require('./routes/financeiro.routes'));

// Tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Erro interno do servidor',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Conexão com o banco de dados e inicialização do servidor
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Conectado ao MongoDB');
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Erro ao conectar ao MongoDB:', err);
        process.exit(1);
    });
