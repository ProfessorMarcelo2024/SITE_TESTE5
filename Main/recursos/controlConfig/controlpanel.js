//imports
import * as mysql from 'mysql2';

// conectando com Banco de dados

const connect = mysql.createConnection({
    host:'localHost',
    user: 'usuarioBase',
    password: 'BRgxKaawWtQa0VuAgHCC82iaA7amWC',
    database: 'lista_pocos'
});

//radio select 