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
 let num= 0; 

function addToReceipt(e) {
    let item;
    let wrapper1;
    let inner1;
    let inner2;
    let name;
    let text;

    num = num + 1;
    console.log(num);
    item = e.innerHTML;
    receipt.push(item);
    wrapper1 = document.createElement("div");
    inner1 = document.createElement("div");
    inner2 = document.createElement("div");

    wrapper1.setAttribute("class", "row");
    inner1.setAttribute("class", "col-md-6");
    inner2.setAttribute("class", "col-md-6");    
    inner2.id = "itemPrice" + num;

    // Increment or no increment??
    name = "itemName" + num;
    inner1.setAttribute("name", name);

    console.log(inner2.id);

    getPrices(item, num);

    text = document.createTextNode(item);
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



function getPrices(item, num) {
    var txt;
    fName = {"fName":item};
    dbParam = JSON.stringify(fName);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            items_price = this.responseText;
            let id = "itemPrice" + num;
            let result = items_price[10];
            console.log(result);
            result2 = formatFunction(result);
            document.getElementById(id).innerHTML = result2;
        }
    };
xmlhttp.open("GET", "./php/menu-items.php?x=" + dbParam, true);
xmlhttp.send();
}


function formatFunction(result){
    let formatted = "$" + result + ".00";
    return formatted;
}