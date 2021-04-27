var receipt = [];




function addToReceipt() {

}

function submitReceipt() {
    receipt.forEach(getPrices);
}

function getPrices(item) {
    fName = { "fName":item};
    dbParam = JSON.stringify(fName);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            items_price = JSON.parse(this.responseText);
            for (x in items_price) {
                txt += items_price[x].name + "<br>";
            }
            receiptDisplay.innerHTML = txt;
        }
    };
xmlhttp.open("GET", "menu_items.php?x=" + dbParam, true);
xmlhttp.send();
}