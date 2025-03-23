document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([19.8302, -90.5349], 12); // Centro de Campeche

    // Cargar capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Obtener sitios arqueológicos desde PHP
    fetch('sitios.php')
        .then(response => response.json())
        .then(data => {
            data.forEach(sitio => {
                L.marker([sitio.latitud, sitio.longitud])
                    .addTo(map)
                    .bindPopup(`<b>${sitio.nombre}</b><br>${sitio.descripcion}`);
            });
        })
        .catch(error => console.log('Error al cargar sitios:', error));
});

// Cambiar el modo de recorrido (opcional)
function cambiarModo(modo) {
    alert("Modo cambiado a: " + modo);
}
