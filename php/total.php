<?php
include "connect.php";

session_start();

$order = $_COOKIE["order"];
$total = $_COOKIE["cost"];

$DateTime = date("Y-m-d h:i:sa");
$CashierName = $_SESSION["id"];
$Items = $order;
$Payment;
if(isset($_POST['cash'])) {
    $Payment = "cash";
} else if(isset($_POST['credit'])) {
    $Payment = "card";
}

$sql = "INSERT INTO Orders (DoO, Cashier, Items, Cost, Payment) VALUES ('$DateTime', '$CashierName', '$Items', '$total', '$Payment')";
if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "failed" . mysqli_error($conn);
};
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!-- CSS -->
    <link rel="stylesheet" href="../styles/total.css">
</head>
<body>
    <div class="container">
        <div class="mainSection">
            <div class="row">
                <div class="col-md-6">
                    <h2>Your Total: </h2>
                </div>
                <div class="col-md-6">
                    <h2>$32.24</h2>
                </div>
            </div>
            
        </div>
    </div>
</body>
</html>