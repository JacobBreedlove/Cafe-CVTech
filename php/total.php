<?php
include "menu-items.php";
include "CafeCVTech.php";

$DateTime = date("Y-m-d h:i:sa");
$CashierName;
$Items;
$Cost;
$Payment;

$sql = "INSERT INTO Orders (DoO, Cashier, Items, Cost, Payment) VALUES ($DateTime, $CashierName, $Items, $Cost, $Payment)";
if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "failed";
};
?>