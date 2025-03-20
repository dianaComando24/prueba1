// Esperar 3 segundos para cargar el contenido después de que se muestre la pantalla de carga
window.onload = function() {
    setTimeout(function() {
      // Ocultar la pantalla de carga después de 3 segundos
      document.getElementById("loading-screen").style.opacity = 0;
      setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
      }, 1000); // Tiempo de desvanecimiento de la pantalla de carga
    }, 3000); // Duración de la pantalla de carga (en milisegundos)
  };
  
  // Funciones para cambiar las canciones y fondos
  function changeSong(song, background) {
    document.getElementById('audioSource').src = song;
    document.getElementById('player').load();
    document.body.style.backgroundImage = `url(${background})`;
  }
  
  // Funciones para cambiar de poema en el carrusel
  function nextPoem() {
    let carouselInner = document.getElementById('carousel-inner');
    carouselInner.style.transform = 'translateX(-100%)';
  }
  
  function prevPoem() {
    let carouselInner = document.getElementById('carousel-inner');
    carouselInner.style.transform = 'translateX(0%)';
  }
  