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

$id = "";
if (isset($_POST["submit"])) {
    $id = $_POST["Id"];
    $sql = "SELECT Id FROM Cashiers WHERE Id = '$id'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_array()) {
            if ($id == $row[0]) {
                header("Location:./CafeCVTech.php");
            } else {
                echo "Incorrect Id.";
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign-in</title>

    <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <!-- CSS -->
    <link rel="stylesheet" href="./styles/style.css">

    <!-- JAVASCRIPT -->
    <script src="./scripts/main.js" defer></script>
</head>
<body>
    <div>
        <form action="" method="POST">
            <label for="Id">Id:</label>
            <input type="text" name="Id">
            <button type="submit" name="submit">Sign-in</button>
        </form>
    </div>
</body>
</html>