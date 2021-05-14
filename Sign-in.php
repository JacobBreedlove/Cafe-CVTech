<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'Cafe-CVTech';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

session_start();

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
                $_SESSION["id"] = $_POST["Id"];
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
    <link rel="stylesheet" href="./styles/signin.css">

    <!-- JAVASCRIPT -->
    <script src="./scripts/main.js" defer></script>
</head>
<body>
    <div class="container">
        <div class="mainHeader">
            <div class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198.86 23.09"><defs><style>.cls-1{fill:#fff;}</style></defs><title>logo</title><g id="Layer_2" data-name="Layer 2"><g id="Main_Nav" data-name="Main Nav"><g id="Logo"><polygon class="cls-1" points="34.3 0 49.38 23.09 44.98 23.09 29.9 0 34.3 0"/><path class="cls-1" d="M-292.3-932.45c-.52,4-2.43,5.54-6.93,5.54h-13.85c-2.56,0-4.08-.48-5.29-1.66s-1.63-2.63-1.63-5.26v-9.25c0-2.63.45-4.12,1.63-5.26s2.73-1.66,5.29-1.66h13.85c4.5,0,6.41,1.52,6.93,5.54L-296-944a2.74,2.74,0,0,0-.69-1.87c-.59-.59-1.25-.7-3.47-.7h-12c-2.25,0-2.91.14-3.46.7s-.7,1.31-.7,3.46v7.86c0,2.14.14,2.87.7,3.46s1.21.69,3.46.69h12c2.22,0,2.88-.1,3.47-.69a2.74,2.74,0,0,0,.69-1.87Z" transform="translate(320 950)"/><polygon class="cls-1" points="49.38 9.63 43.09 0 38.69 0 47.18 13 49.38 9.63"/><polygon class="cls-1" points="195.15 23.09 195.15 13.3 175.07 13.3 175.07 23.09 171.37 23.09 171.37 0 175.07 0 175.07 9.83 195.15 9.83 195.15 0 198.86 0 198.86 23.09 195.15 23.09"/><path class="cls-1" d="M-154.17-932.45c-.52,4-2.42,5.54-6.92,5.54h-13.85c-2.56,0-4.09-.48-5.3-1.66s-1.63-2.63-1.63-5.26v-9.24c0-2.64.45-4.13,1.63-5.27s2.74-1.66,5.3-1.66h13.85c4.5,0,6.4,1.52,6.92,5.54l-3.67.49a2.7,2.7,0,0,0-.69-1.87c-.59-.59-1.25-.7-3.46-.7h-12c-2.25,0-2.91.14-3.46.7s-.69,1.31-.69,3.46v7.86c0,2.14.14,2.87.69,3.46s1.21.69,3.46.69h12c2.21,0,2.87-.1,3.46-.69a2.7,2.7,0,0,0,.69-1.87Z" transform="translate(320 950)"/><polygon class="cls-1" points="91.09 23.09 87.38 23.09 87.38 3.46 75.37 3.46 75.37 0 103.06 0 103.06 3.46 91.09 3.46 91.09 23.09"/><polygon class="cls-1" points="110.68 3.46 110.68 9.83 131.66 9.83 131.21 13.3 110.68 13.3 110.68 19.63 132.59 19.63 132.59 23.09 106.97 23.09 106.97 0 131.66 0 131.66 3.46 110.68 3.46"/><polygon class="cls-1" points="58.17 23.09 73.26 0 68.86 0 53.78 23.09 58.17 23.09"/><polygon class="cls-1" points="49.38 23.09 64.47 0 60.07 0 44.98 23.09 49.38 23.09"/></g></g></g></svg>
            </div>
        
        </div>
        <div class="accentHeader"></div>
        <div class="mainSection">
            <form action="" method="POST">
                <div class="row">
                    <div class="col-md-12">
                        <label for="Id">Employee ID</label>
                        <input type="number" name="Id">
                        <button type="submit" name="submit">Sign-in</button>
                    </div>
                </div>
            </form>
        </div>
        
    </div>
</body>
</html>