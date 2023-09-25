// addobject.js
const numeroid = 1;

function fetchDataAndManipulateDOM() {
  const apiUrl = `http://localhost:3001/artist/${numeroid}`;

  // Realiza una solicitud GET a la API
  fetch(apiUrl)
    .then(response => response.json()) // Parsea la respuesta JSON
    .then(data => {
      // Manipula los datos recibidos, por ejemplo, mostrándolos en tu página
      const artistName = data.nombre;
      const artistBio = data.biografia;

      // Supongamos que tienes un elemento HTML con el ID "nombreArtista" para mostrar el nombre y otro con el ID "biografiaArtista" para mostrar la biografía
      document.getElementById('nombreArtista').textContent = artistName;
      document.getElementById('biografiaArtista').textContent = artistBio;
    })
    .catch(error => {
      console.error('Error al obtener datos de la API:', error);
    });
}
