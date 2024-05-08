// imports
const express = require('express');
const mysql = require('mysql2');
const sqlconfig = require('./recursosAPI/sqlconfig');

const app = express();

// Configuração da conexão MySQL
const connect = mysql.createConnection(sqlconfig);






// Configurar o Express para servir arquivos estáticos
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});