<?php
$host = "localhost";
$user = "root"; // Usuario por defecto en XAMPP
$pass = ""; // Sin contraseña por defecto en XAMPP
$db = "mapa_campeche"; // Nombre de tu base de datos

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
