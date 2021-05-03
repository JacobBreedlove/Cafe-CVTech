var receipt = [];
var txt;



// function enterFullscreen() {
//     let element = document.querySelector("body");

//     element.requestFullscreen()
//     .then(function(){

//     })
//     .catch(function(error) {
//         console.log(error.message);
//     })
// }

function addToReceipt(e) {
    let item = e.innerHTML;
    receipt.push(item);
    var wrapper1 = document.createElement("div");
    var inner1 = document.createElement("div");
    var inner2 = document.createElement("div");

    wrapper1.setAttribute("class", "row");
    inner1.setAttribute("class", "col-md-6");
    inner2.setAttribute("class", "col-md-6");    
    inner2.id = "itemPrice";

    getPrices(item);
    console.log(item);


    var text = document.createTextNode(item);
    inner1.appendChild(text);
    wrapper1.appendChild(inner1);
    wrapper1.appendChild(inner2);
    
    document.querySelector("#receipt").appendChild(wrapper1);
}

// function submitReceipt() {
    
// }

// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     var myObj = JSON.parse(this.responseText);
//     console.log(myObj.main["mainSpecial"]);
//   }
// };
// xmlhttp.open("GET", "./scripts/menu2.json", true);
// xmlhttp.send();



function getPrices(item) {
    var txt;
    fName = {"fName":item};
    dbParam = JSON.stringify(fName);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            items_price = this.responseText;
            document.getElementById('itemPrice').innerHTML = items_price;
        }
    };
xmlhttp.open("GET", "./php/getPrices.php?x=" + dbParam, true);
xmlhttp.send();
}