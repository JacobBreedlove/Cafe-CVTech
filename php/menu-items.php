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
    Price FLOAT)";
if ($conn->query($sql) === TRUE) {
    echo "table created successfully. ";
} else {
    echo "Food table creation error: " . $conn->error . " ";
}


$sql = "CREATE TABLE Sides (
    fName varchar(200),
    Price FLOAT)";
if ($conn->query($sql) === TRUE) {
    echo "table created successfully. ";
} else {
    echo "Sides table creation error: " . $conn->error . " ";
}


$sql = "CREATE TABLE Drinks (
    fName varchar(200),
    Price FLOAT)";
if ($conn->query($sql) === TRUE) {
    echo "table created successfully. ";
} else {
    echo "Drinks table creation error: " . $conn->error . " ";
}

