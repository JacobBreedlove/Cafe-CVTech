<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'Cafe-CVTech';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "USE Cafe-CVTech";
mysqli_query($conn, $sql);


header("Content-Type: application/json; charset=UTF-8");
$id = json_decode($_GET["x"], false);

$cashierId = $conn->prepare("SELECT Id FROM Cashiers WHERE id = ?");
$cashierId->bind_param("s", $id->id);
$cashierId->execute();
$result = $cashierId->get_result();
$output = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($output);
?>