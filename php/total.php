<?php
include "menu-items.php";
include "CafeCVTech.php";

session_start();

header("Content-Type: application/json; charset=UTF-8");
$order = json_decode($_GET["x"], false);

$DateTime = date("Y-m-d h:i:sa");
$CashierName = $_SESSION["id"];
$Items = $order;
$Cost = $total;
$Payment;

$sql = "INSERT INTO Orders (DoO, Cashier, Items, Cost, Payment) VALUES ($DateTime, $CashierName, $Items, $Cost, $Payment)";
if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "failed";
};
?>