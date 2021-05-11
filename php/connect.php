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