<?php
include "connect.php";

session_start();

header("Content-Type: application/json; charset=UTF-8");
$order = json_decode($_GET["x"], false);


$DateTime = date("Y-m-d h:i:sa");
$CashierName = $_SESSION["id"];
$Items = $order;
$total = $_POST["total"];
$Cost = $total;

$Payment;
if(isset($_POST['cash'])) {
    $Payment = "cash";
} else if(isset($_POST['credit'])) {
    $Payment = "card";
}

$sql = "INSERT INTO Orders (DoO, Cashier, Items, Cost, Payment) VALUES ('$DateTime', '$CashierName', '$Items', '$Cost', '$Payment')";
if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "failed" . mysqli_error($conn);
};
