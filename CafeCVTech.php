<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cafe CVTech</title>

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
    <div class="header">
        <div class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198.86 23.09">
                <defs>
                    <style>
                        .cls-1 {
                            fill: #fff;
                        }
                    </style>
                </defs>
                <title>logo</title>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Main_Nav" data-name="Main Nav">
                        <g id="Logo">
                            <polygon class="cls-1" points="34.3 0 49.38 23.09 44.98 23.09 29.9 0 34.3 0" />
                            <path class="cls-1" d="M-292.3-932.45c-.52,4-2.43,5.54-6.93,5.54h-13.85c-2.56,0-4.08-.48-5.29-1.66s-1.63-2.63-1.63-5.26v-9.25c0-2.63.45-4.12,1.63-5.26s2.73-1.66,5.29-1.66h13.85c4.5,0,6.41,1.52,6.93,5.54L-296-944a2.74,2.74,0,0,0-.69-1.87c-.59-.59-1.25-.7-3.47-.7h-12c-2.25,0-2.91.14-3.46.7s-.7,1.31-.7,3.46v7.86c0,2.14.14,2.87.7,3.46s1.21.69,3.46.69h12c2.22,0,2.88-.1,3.47-.69a2.74,2.74,0,0,0,.69-1.87Z" transform="translate(320 950)" />
                            <polygon class="cls-1" points="49.38 9.63 43.09 0 38.69 0 47.18 13 49.38 9.63" />
                            <polygon class="cls-1" points="195.15 23.09 195.15 13.3 175.07 13.3 175.07 23.09 171.37 23.09 171.37 0 175.07 0 175.07 9.83 195.15 9.83 195.15 0 198.86 0 198.86 23.09 195.15 23.09" />
                            <path class="cls-1" d="M-154.17-932.45c-.52,4-2.42,5.54-6.92,5.54h-13.85c-2.56,0-4.09-.48-5.3-1.66s-1.63-2.63-1.63-5.26v-9.24c0-2.64.45-4.13,1.63-5.27s2.74-1.66,5.3-1.66h13.85c4.5,0,6.4,1.52,6.92,5.54l-3.67.49a2.7,2.7,0,0,0-.69-1.87c-.59-.59-1.25-.7-3.46-.7h-12c-2.25,0-2.91.14-3.46.7s-.69,1.31-.69,3.46v7.86c0,2.14.14,2.87.69,3.46s1.21.69,3.46.69h12c2.21,0,2.87-.1,3.46-.69a2.7,2.7,0,0,0,.69-1.87Z" transform="translate(320 950)" />
                            <polygon class="cls-1" points="91.09 23.09 87.38 23.09 87.38 3.46 75.37 3.46 75.37 0 103.06 0 103.06 3.46 91.09 3.46 91.09 23.09" />
                            <polygon class="cls-1" points="110.68 3.46 110.68 9.83 131.66 9.83 131.21 13.3 110.68 13.3 110.68 19.63 132.59 19.63 132.59 23.09 106.97 23.09 106.97 0 131.66 0 131.66 3.46 110.68 3.46" />
                            <polygon class="cls-1" points="58.17 23.09 73.26 0 68.86 0 53.78 23.09 58.17 23.09" />
                            <polygon class="cls-1" points="49.38 23.09 64.47 0 60.07 0 44.98 23.09 49.38 23.09" />
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    </div>
    <div class="secondHeader"></div>
    <div class="container selectArea">
        <div class="row">
            <div class="col-md-4 main">
                <div class="wrapper" onclick="addToReceipt(this)">Cheeseburger</div>
            </div>
            <div class="col-md-4 sides">
                <div class="wrapper" onclick="addToReceipt(this)">French Fries</div>
            </div>
            <div class="col-md-4 drinks">
                <div class="wrapper" onclick="addToReceipt(this)">Coke</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 main">
                <div class="wrapper" onclick="addToReceipt(this)">Hamburger</div>
            </div>
            <div class="col-md-4 sides">
                <div class="wrapper" onclick="addToReceipt(this)">Tater Tots</div>
            </div>
            <div class="col-md-4 drinks">
                <div class="wrapper" onclick="addToReceipt(this)">Dr. Pepper</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 main">
                <div class="wrapper" onclick="addToReceipt(this)">Chicken Tenders</div>
            </div>
            <div class="col-md-4 sides">
                <div class="wrapper" onclick="addToReceipt(this)">Chips</div>
            </div>
            <div class="col-md-4 drinks">
                <div class="wrapper" onclick="addToReceipt(this)">Sprite</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 main">
                <div class="wrapper" onclick="addToReceipt(this)">Salad</div>
            </div>
            <div class="col-md-4 sides">
                <div class="wrapper" onclick="addToReceipt(this)">Candy</div>
            </div>
            <div class="col-md-4 drinks">
                <div class="wrapper" onclick="addToReceipt(this)">Coffee</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 main">
                <div class="wrapper" onclick="addToReceipt(this)">Special</div>
            </div>
            <div class="col-md-4 sides">
                <div class="wrapper" onclick="addToReceipt(this)">Sample</div>
            </div>
            <div class="col-md-4 drinks">
                <div class="wrapper" onclick="addToReceipt(this)">Sample</div>
            </div>
        </div>
    </div>
    <div class="container receiptSection">
        <div class="row">
            <div class="col-md-12">
                <h1>Current Order</h1>
            </div>
        </div>
        <hr>

        <form action="" method="POST" id="receipt">
            <div class="row receiptHeader">
                <div class="col-md-2 receiptHead">Qty</div>
                <div class="col-md-4 receiptHead">Item</div>
                <div class="col-md-4 receiptHead">Price</div>
                <div class="col-md-2"></div>
            </div>
            <div id="items">
            </div>

            <div class="totalDiv">
                <div class="row">
                    <div class="col-md-7">
                        <h5>Tax: </h5>
                        <h5>Subtotal: </h5>
                        <h2><strong>Total: </strong></h2>
                    </div>
                    <div class="col-md-5">
                        <h5 id="tax"></h5>
                        <h5 id="subtotal"></h5>
                        <h2 id="total"></h2>
                    </div>
                </div>
            </div>
            <div class="col-md-6 submit">
                <div id="submitButton" onclick="cashCredit()">Finalize Order</div>
            </div>
            <div class="col-md-6 cashCredit">
                <button name="cash" class="cashCreditButtons" id="cash" type="submit" value="cash" onclick="submitReceipt()">Cash</button>
                <button class=" cashCreditButtons" type="submit" id="credit" value="credit" name="credit" onclick="submitReceipt()">Card</button>
            </div>
        </form>

    </div>
</body>

</html>