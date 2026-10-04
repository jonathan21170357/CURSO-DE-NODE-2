const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'mi-base-datos-mi-base-datos.i.aivencloud.com',
        port: '11605',
        user: 'avnadmin',
        //password: '',//'AVNS_EyoyNNHT3A4TnM8ZcuF',
        //database: 'defaultdb',
        //ssl: {
        //rejectUnauthorized: false
        //}
    }   
)

db.connect((err) =>{
    if(err) {
        throw err;
    }
    console.log('Base de datos conectada');
});

db.query('SHOW TABLES', (err, results) => {
        if (err) {
            console.log('Error al mostrar tablas:', err);
        } else {
            console.log('Tablas reales que ve Node.js en esta conexión:', results);
        }
    });
module.exports = db;