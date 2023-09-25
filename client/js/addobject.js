function fetchDataAndManipulateDOM() {
  const apiUrl = 'http://localhost:3001/artists'; 


  fetch(apiUrl)
    .then(response => response.json()) 
    .then(artistas => {
      artistas.forEach(artist => {
        const artistName = artist.nombre;
        const artistBio = artist.biografia;
        const fotoart = artist.fotoalbum;
        const fotoAlbum = artist.fotoAlbum;
        const Urlcancion = artist.lista;
        const iD = artist.id;
        const cancion = artist.nombrecancion;
        

        const nombreArtistaElement = document.querySelector('#nombreArtista');
        nombreArtistaElement.textContent = artistName;

        const biografiaArtistaElement = document.querySelector('#biografiaArtista');
        biografiaArtistaElement.textContent = artistBio;

        const imgArtist = document.querySelector('#imagenart');
        imgArtist.src = fotoart;

        const cancionR = document.querySelector('#cancionr')
        cancionR.src =Urlcancion;

        const carouselImages = document.querySelectorAll('.carousel-image');

        artistas.forEach((artist, index) => {
          const fotoart = artist.fotoalbum;
          const iD = artist.id;
          const carouselImage = carouselImages[index];
          carouselImage.src = fotoart;
          carouselImage.id = `imagen${iD}`;
        });
        
        const contenedorCanciones = document.querySelector('#contenedorCanciones');
        const iDArray = Array.isArray(iD) ? iD : [iD];

        iDArray.forEach(id => {
          const elementoExistente = document.getElementById(id);
          if (!elementoExistente) {
            const divCancion = document.createElement('div');
            divCancion.classList.add('d-flex', 'flex-row', 'justify-content-between', 'w-100', 'ps-4', 'pe-4');
    
            const h5Cancion = document.createElement('h5');
            h5Cancion.textContent = cancion;
            h5Cancion.id = id;
            h5Cancion.setAttribute('type','button')
            h5Cancion.classList.add('text-center', 'textos');
    
            const divCerrar = document.createElement('div');
            divCerrar.setAttribute('type','button')
            divCerrar.id = id;
            divCerrar.textContent = '✖️';
    
            divCancion.appendChild(h5Cancion);
            divCancion.appendChild(divCerrar);
    
            contenedorCanciones.appendChild(divCancion);
          }
        });
      });
    })
    .catch(error => {
      console.error('Error al obtener datos de la API:', error);
    });
}

fetchDataAndManipulateDOM();
