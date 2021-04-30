var receipt = [];




function addToReceipt(e) {
    let item = e.innerHTML;
    receipt += item;
    var wrapper1 = document.createElement("div");
    var inner1 = document.createElement("div");
    var inner2 = document.createElement("div");

    wrapper1.setAttribute("class", "row");
    inner1.setAttribute("class", "col-md-6");
    inner2.setAttribute("class", "col-md-6");    
    inner2.id = "itemPrice";

    let result = getPrices(item);
    console.log(result);


    var text = document.createTextNode(item);
    inner1.appendChild(text);
    wrapper1.appendChild(inner1);
    wrapper1.appendChild(inner2);
    

    document.querySelector("#receipt").appendChild(wrapper1);
    
}

function submitReceipt() {
    
}

function getPrices(item) {
    fName = {"fName":item};
    dbParam = JSON.stringify(fName);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            items_price = JSON.parse(this.responseText);
            for (x in items_price) {
                txt += items_price[x].name + "<br>";
            }
            document.getElementById('itemPrice').innerHTML = txt;
        }
    };
// xmlhttp.open("GET", "menu-items.php?x=" + dbParam, true);
xmlhttp.send();
}