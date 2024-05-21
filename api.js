// imports
const express = require('express');
const mysql = require('mysql2');
const sqlconfig = require('./recursosAPI/sqlconfig');
const pdfCreator = require('./recursosAPI/pdfCreator');

const app = express();

// Configuração da conexão MySQL
const connect = mysql.createConnection(sqlconfig);

app.get('/dados', (req, res) => {
    connect.query('SELECT * FROM pocos', (err, results) => {
        if (err) {
            console.error('Erro ao buscar dados:', err);
            res.status(500).send('Erro ao buscar dados do banco de dados.');
        } else {
            pdfCreator.criaDocs(results);
            res.json(results);

        }
    });
});

// Configurar o Express para servir arquivos estáticos
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});