<?php
header("Content-Type: application/json");
include 'db.php';

$sql = "SELECT * FROM sitios";
$result = $conn->query($sql);

$sitios = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $sitios[] = $row;
    }
}

echo json_encode($sitios);
$conn->close();
?>
