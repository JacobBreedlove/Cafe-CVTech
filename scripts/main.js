var receipt = [""];
var order = [];
var txt;

 let num= 0; 

function addToReceipt(e) {
    let item;
    item = e.innerHTML;   
    let wrapper1;
    let inner1;
    let inner2;
    let name;
    let text;
    let text2;
    let matchedItem;
    let matchedItemNum;
    let matched;
    let matchedItemID;
    let qtyID;
    let button;

    for (i = 0; i < receipt.length; i++) {
        if(receipt[i] == item){
            matchedItem = true;
            matchedItemNum = i;
            matched = receipt[i];
            break;
        }
    }
    
    if (matchedItem) {
        matchedItemID = "quantity" + matchedItemNum;
        let before = document.getElementById(matchedItemID).innerHTML;
        before = parseInt(before);
        let after = before + 1;
        document.getElementById(matchedItemID).innerHTML = after;
    } else {
        num = num + 1;
        receipt.push(item);
        wrapper1 = document.createElement("div");
        wrapper1.id = item;
        inner1 = document.createElement("div");            
        inner2 = document.createElement("div");
        inner3 = document.createElement("div");
        inner4 = document.createElement("div");
        inner5 = document.createElement("div");

        wrapper1.setAttribute("class", "row");
        inner1.setAttribute("class", "col-md-4");
        inner2.setAttribute("class", "col-md-4");    
        inner3.setAttribute("class", "col-md-2");
        inner5.setAttribute("class", "col-md-2");
        qtyID = "quantity" + num;
        inner4.setAttribute("class", "quantity");
        inner4.id = "quantity" + num;

        inner2.id = "itemPrice" + num;

        // Increment or no increment??
        name = "itemName" + num;
        inner1.setAttribute("name", name);

        getPrices(item, num);

        text = document.createTextNode(item);
        text2 = document.createTextNode("1");
        button1 = document.createElement("DIV");
        let insertIntoButton = document.createTextNode("X");
        button1.appendChild(insertIntoButton);
        let deleteID = "deleteButton" + num;
        button1.id = deleteID;
        button1.setAttribute("class", "deleteButton");
        button1.onclick = function(){deleteItem(this.parentNode);};

        inner5.appendChild(button1);
        inner4.appendChild(text2);
        inner3.appendChild(inner4);
        inner1.appendChild(text);
        
        
        wrapper1.appendChild(inner3);
        wrapper1.appendChild(inner1);
        wrapper1.appendChild(inner2);
        wrapper1.appendChild(inner5);
            
        document.querySelector("#receipt").appendChild(wrapper1);
    }
}


function deleteItem(e) {
    let element = e.parentNode;
    let parentElement = element.parentNode;
    element = element.id;
    let elementQty = document.getElementById(element).firstChild;
    let elementQtyId = elementQty.firstChild.id;
    elementQty = elementQty.firstChild.innerHTML;

    if(elementQty > 1) {
        let beforeQty = document.getElementById(elementQtyId).innerHTML;
        let deletedQty = parseInt(beforeQty) - 1;
        document.getElementById(elementQtyId).innerHTML = deletedQty;
    } else {
        let formElementCount = document.getElementById(element).parentElement.childElementCount;
        document.getElementById(element).remove();
        reformatIDs(formElementCount, parentElement);
        
        for(i = 0; i < receipt.length; i++){
            if (receipt[i] == element) {
                receipt.splice(i, 1)
                break;
            }
        
    }
    }

    
}

function reformatIDs(formElementCount, e) {
    // GOES TO THE FORM INSTEAD OF ROW OR COL-MD-?? 
    let divChildElements = e.childNodes;
    let totalElements = divChildElements.length - 5;
    if (totalElements == 0){
        num = 0;
    } else {
        for (i = 0; i < totalElements; i++) {
            let childElement = divChildElements[i+5];
            childElement = childElement.childNodes;
            childElement = childElement[0].childNodes;
            let quantityElement = childElement[0];
            quantityElement.id = "quantity" + (i+1);
        } 
        for (i = 0; i < totalElements; i++) {
            let childElement = divChildElements[i+5];
            childElement = childElement.childNodes;
            let childElementID1 = childElement[2];
            childElementID1.id = "itemPrice" + (i+1);
            let childElementID2 = childElement[1];
            let childName = "itemName" + (i+1);
            childElementID2.setAttribute("name", childName);
        }
        num = num -1;
    }
    
}

function submitReceipt() {
    let i = 1
    receipt.forEach(findQuantity);
    function findQuantity(value, index, array) {
        number = document.getElementById("quantity" + i).innerHTML;
        txt = receipt[i] + number;
        ++i;
        order.push(txt);
        console.log(order);
    }
}


function getPrices(item, num) {
    var txt;
    fName = {"fName":item};
    dbParam = JSON.stringify(fName);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            items_price = this.responseText;
            console.log(num);
            let id = "itemPrice" + num;
            let result = items_price[11];
            result2 = formatFunction(result);
            document.getElementById(id).innerHTML = result2;
        }
    };
xmlhttp.open("GET", "./php/menu-items.php?x=" + dbParam, true);
xmlhttp.send();
}

addEventListener("click", function() {
    var el = document.documentElement;
    var rfs = el.requestFullScreen || el.webkitRequestFullScreen ||el.mozRequestFullScreen;
    rfs.call(el);
});

function formatFunction(result){
    let formatted = "$" + result + ".00";
    return formatted;
}


function signIn() {
    var cashier = document.getElementsByName("Id")
    cashierId = {"id":cashier};
    console.log(cashierId);
    dbParam = JSON.stringify(cashierId);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cashierId = JSON.parse(this.responseText);
            console.log(cashierId);
        }
    };
xmlhttp.open("GET", "./php/cashiers.php?x=" + dbParam, true);
id = xmlhttp.send();
console.log(id);
    if (cashier == null || cashier == "") {
        signIn();
    } else {
        location.href = "CafeCVTech.php"
    }
}
