// client/js/function.js (asegúrate de que este archivo esté vinculado a tu página HTML)

const numeroid = 1;

function fetchDataAndManipulateDOM() {
  const apiUrl = `http://localhost:3001/artist/${numeroid}`;

  // Realiza una solicitud GET a la API desde el navegador
  fetch(apiUrl)
    .then(response => response.json()) // Parsea la respuesta JSON
    .then(data => {
      // Manipula los datos recibidos, por ejemplo, mostrándolos en tu página
      const artistName = data.nombre;
      const artistBio = data.biografia;
      const fotoart = data.fotoalbum;
      const fotoAlbum = data.fotoAlbum;
      const cancion = data.lista;
      const iD = data.id;

      // Supongamos que tienes un elemento HTML con el ID "nombreArtista" para mostrar el nombre y otro con el ID "biografiaArtista" para mostrar la biografía
      document.querySelector('#nombreArtista').textContent = artistName;
      document.querySelector('#biografiaArtista').textContent = artistBio;
    })
    .catch(error => {
      console.error('Error al obtener datos de la API:', error);
    });
}

// Llama a la función para cargar los datos
fetchDataAndManipulateDOM();
