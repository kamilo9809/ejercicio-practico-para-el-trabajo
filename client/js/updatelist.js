const express = require('express');
const app = express();
const port = 3001;
const mysql = require('mysql2'); 
const bodyParser = require('body-parser'); // Importa el módulo bodyParser para analizar el cuerpo de la solicitud POST

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // Agrega bodyParser para analizar el cuerpo de la solicitud POST
app.use(express.static('public')); // Sirve archivos estáticos desde la carpeta 'public'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    database: 'ejerciciopruebamusical', 
});

app.listen(port, () => {
    console.log(`Servidor API corriendo en http://localhost:${port}`);
});

// Ruta para manejar la solicitud POST desde el formulario
app.post('/artists', (req, res) => {
    const { artistName, biography, artistPhoto, lista, nombrecancion } = req.body;

    // Realiza una consulta SQL para insertar un nuevo artista en la base de datos
    const query = 'INSERT INTO artistamusical (nombre, biografia, fotoalbum, lista, nombrecancion) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [artistName, biography, artistPhoto, lista, nombrecancion], (err, results) => {
        if (err) {
            console.error('Error al agregar un nuevo artista:', err);
            res.status(500).json({ error: 'Error al agregar el artista' });
        } else {
            console.log('Artista agregado a la base de datos.');
            res.json({ success: true });
        }
    });
});
