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
    sName varchar(200),
    Price INT)";
if ($conn->query($sql) === TRUE) {
    echo "table created successfully. ";
} else {
    echo "Sides table creation error: " . $conn->error . " ";
}


$sql = "CREATE TABLE Drinks (
    dName varchar(200),
    Price INT)";
if ($conn->query($sql) === TRUE) {
    echo "table created successfully. ";
} else {
    echo "Drinks table creation error: " . $conn->error . " ";
}
?>