const express = require('express');
const app = express();
const port = 3001;
const mysql = require('mysql2'); // Importa la biblioteca mysql2
const cors = require('cors'); // Importa el módulo cors

app.use(express.json());
app.use(cors()); // Habilita CORS para todas las rutas

// Configura la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Usuario de la base de datos (root en este caso)
  database: 'ejerciciopruebamusical', // Nombre de la base de datos
});


// Establece la conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos MySQL');
  }
});

// Ruta para obtener información de todos los artistas
app.get('/artists', (req, res) => {
  // Realiza una consulta SQL para obtener todos los artistas
  connection.query(
    'SELECT * FROM artistamusical',
    (err, results) => {
      if (err) {
        console.error('Error al obtener datos de los artistas:', err);
        res.status(500).json({ error: 'Error al obtener datos de los artistas' });
      } else {
        res.json(results);
      }
    }
  );
});

// Ruta para obtener información de un artista por su ID
app.get('/artist/:id', (req, res) => {
  const artistId = req.params.id;

  // Realiza una consulta SQL para obtener información del artista por su ID
  connection.query(
    'SELECT * FROM artistamusical WHERE id = ?',
    [artistId],
    (err, results) => {
      if (err) {
        console.error('Error al obtener datos del artista:', err);
        res.status(500).json({ error: 'Error al obtener datos del artista' });
      } else {
        if (results.length === 0) {
          res.status(404).json({ error: 'Artista no encontrado' });
        } else {
          const artistInfo = results[0];
          res.json(artistInfo);
        }
      }
    }
  );
});

// Cierra la conexión a la base de datos al cerrar la aplicación
process.on('exit', () => {
  connection.end();
  console.log('Conexión cerrada a la base de datos MySQL');
});

app.listen(port, () => {
  console.log(`Servidor API corriendo en http://localhost:${port}`);
});
