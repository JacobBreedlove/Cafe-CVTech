<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'Cafe-CVTech';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "CREATE TABLE Food (
    fName varchar(200),
    Price INT)";
if ($conn->query($sql) === TRUE) {
    echo "table created successfully. ";
} else {
    echo "Food table creation error: " . $conn->error . " ";
}


$sql = "CREATE TABLE Sides (
    fName varchar(200),
    Price INT)";
if ($conn->query($sql) === TRUE) {
    echo "table created successfully. ";
} else {
    echo "Sides table creation error: " . $conn->error . " ";
}


$sql = "CREATE TABLE Drinks (
    fName varchar(200),
    Price INT)";
if ($conn->query($sql) === TRUE) {
    echo "table created successfully. ";
} else {
    echo "Drinks table creation error: " . $conn->error . " ";
}


header("Content-Type: application/json; charset=UTF-8");
$fName = json_decode($_GET["x"], false);

$food = $conn->prepare("SELECT Price FROM Food WHERE fName = ?");
$food->bind_param("s", $fName->fName);
$food->execute();
$result = $food->get_result();
$output = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($output);

$sides = $conn->prepare("SELECT Price FROM Sides WHERE fName = ?");
$sides->bind_param("s", $fName->fName);
$sides->execute();
$result = $sides->get_result();
$output = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($output);

$drinks = $conn->prepare("SELECT Price FROM Drinks WHERE fName = ?");
$drinks->bind_param("s", $fName->fName);
$drinks->execute();
$result = $drinks->get_result();
$output = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($output);
?>