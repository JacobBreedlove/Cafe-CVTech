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
$fName = json_decode($_GET["x"], false);

$food = $conn->prepare("SELECT Price FROM items WHERE fName = ?");
$food->bind_param("s", $fName->fName);
$food->execute();
$result = $food->get_result();
$output = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($output);
?>
