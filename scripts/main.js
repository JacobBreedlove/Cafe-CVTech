var receipt = [""];
var order = [];
var txt;
let subtotal = 0;
let deletePriceResult = 0;
let num= 0; 
let x = 1;
let parentIdNum;

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
        getPrices(item, num, matchedItem);
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
        inner3.setAttribute("class", "col-md-3");
        inner5.setAttribute("class", "col-md-1");
        qtyID = "quantity" + num;
        inner4.setAttribute("class", "quantity");
        inner4.id = "quantity" + num;
        inner4.setAttribute("onclick", "adjustQuantity(this)");
        
        inner2.id = "itemPrice" + num;
        
        // Increment or no increment??
        name = "itemName" + num;
        inner1.setAttribute("name", name);
        
        getPrices(item, num, matchedItem);
        
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
            
        document.querySelector("#items").appendChild(wrapper1);
    }
}


function createAdjuster(count) {
    adjuster = document.createElement("div");
    add = document.createElement("div");
    subtract = document.createElement("div");
    quantity = document.createElement("input");
    quantity.setAttribute("class", "quantityInput");
    change = document.createElement("div");
    confirmQuantity = document.createElement("div");
    cancel = document.createElement("div");
    finalize = document.createElement("div");

    add.innerHTML = "+";
    add.setAttribute("class", "addSubtract");
    add.setAttribute("onclick", "increase(quantity)")
    subtract.innerHTML = "-";
    add.id = "addition";
    subtract.setAttribute("class", "addSubtract");
    subtract.setAttribute("onclick", "decrease(quantity)")
    quantity.value = count;
    confirmQuantity.innerHTML = "Confirm";
    confirmQuantity.setAttribute("class", "confirmCancel");
    cancel.innerHTML = "Cancel";
    cancel.setAttribute("onclick", "destroy(this)");
    cancel.setAttribute("class", "confirmCancel");
    change.appendChild(add);
    change.appendChild(quantity);
    change.appendChild(subtract);
    finalize.appendChild(confirmQuantity);
    finalize.appendChild(cancel);
    adjuster.appendChild(change);
    adjuster.appendChild(finalize);
    adjuster.id = "adjuster" + parentIdNum;
    adjuster.setAttribute("class", "adjuster");
    adjuster.name = "adjuster";
}


function adjustQuantity(e) {
    //find place to put adjuster
    let adjusterQuantity = e.innerHTML;
    findNum(e);
    createAdjuster(adjusterQuantity);
    let insertId = document.getElementById("quantity" + parentIdNum);
    insertId = insertId.parentNode;
    insertId.appendChild(adjuster);
    document.getElementById("quantity" + parentIdNum).style.display = "none";

    confirmQuantity.setAttribute("onclick", "setQuantity(this)");
}

function increase() {
    let value = parseInt(quantity.value);
    value = value + 1;
    quantity.value = value;
}

function decrease() {
    let value = parseInt(quantity.value);
    if (value > 1) {
        value = value - 1;
        quantity.value = value;
    } 
}

function findNum(e){
    let element = e.parentNode.parentNode;
    element = element.childNodes;
    parentIdNum = element[2].id;
    parentIdNum = parentIdNum.slice(-1);
    console.log(parentIdNum);
}

function setQuantity(e) {
    //find way to select correct quantity
    let element1 = e.parentNode.parentNode;
    let adjusterQuantity2 = quantity.value;
    let element = element1.id;
    let elementNum = element.slice(-1);
    let beforeQuantity = document.getElementById("quantity" + elementNum).innerHTML;
    confirmButtonSubtotal(adjusterQuantity2, element1, beforeQuantity);
    document.getElementById(element).remove();
    
    
    
    document.getElementById("quantity" + elementNum).innerHTML = adjusterQuantity2;
    document.getElementById("quantity" + parentIdNum).style.display = "block";
}

function confirmButtonSubtotal(quantity, e, before){
    element = e.parentNode.parentNode.childNodes;
    element = element[2].id;
    let confirmPrice = document.getElementById(element).innerHTML;
    let deformatted = deformat(confirmPrice);
    let totalPrice = deformatted * quantity;
    before = before * deformatted;
    subtotal -= before;
    calculateSubtotal(totalPrice);
}

function deformat(price) {
    price = price.substring(1,2);
    return price;
}

function destroy(e) {
    let adjusterID = e.parentNode.parentNode.id;
    console.log(adjusterID)
    document.getElementById(adjusterID).remove();
    document.getElementById("quantity" + parentIdNum).style.display = "block";
}


function deleteItem(e) {
    let element = e.parentNode;
    getPricesDelete(element);
    subtotalToPage();
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
        reformatIDs(formElementCount - 1, parentElement);
        
        for(i = 0; i < receipt.length; i++){
            if (receipt[i] == element) {
                receipt.splice(i, 1)
                break;
            }
        
    }
    }
}

function reformatIDs(formElementCount, e) {
    // GOES TO THE FORM ELEMENT
    let divChildElements = e.childNodes;
    let totalElements = divChildElements.length - 1;
    if (totalElements == 0){
        num = 0;
    } else {
        for (i = 0; i < totalElements; i++) {
            let childElement = divChildElements[i+1];
            childElement = childElement.childNodes;
            childElement = childElement[0].childNodes;
            let quantityElement = childElement[0];
            quantityElement.id = "quantity" + (i+1);
        } 
        for (i = 0; i < totalElements; i++) {
            let childElement = divChildElements[i+1];
            childElement = childElement.childNodes;
            let childElementID1 = childElement[2];
            childElementID1.id = "itemPrice" + (i+1);
            let childElementID2 = childElement[1];
            let childName = "itemName" + (i+1);
            childElementID2.setAttribute("name", childName);
        }
        num = num -1;
        x = x - 1;
    }
    
}

function submitReceipt() {
    let element = document.querySelector("#items");
    let elementNumChildren = element.childElementCount;
    for (i = 0; i < elementNumChildren; i++) {
        let quantID = "quantity" + (i+1);
        element = document.getElementById(quantID).innerHTML;
        order.push(receipt[i+1] + element);
    }
    let price = document.getElementById("total").innerHTML;
    createCookie("order", order, "1");
    createCookie("cost", price, "1");
 }

function createCookie(name, value, days) {
    let expires;
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = escape(name) + "=" + escape(value) + expires;
}

function calculateSubtotal(result) {
    let subtotal1;
    price = parseInt(result);
    subtotal1 = price;
    subtotal += subtotal1;
    subtotalToPage(subtotal);
}

function subtotalToPage(){
    tax = 0.045;
    if (subtotal < 10) {
        document.getElementById('subtotal').innerHTML = "$0" + subtotal + ".00";
    } else {
        document.getElementById('subtotal').innerHTML = "$" + subtotal + ".00";
    }
    
    if (subtotal * tax < 10) {
        document.getElementById('tax').innerHTML = "$0" + (subtotal * tax).toFixed(2);
    } else {
        document.getElementById('tax').innerHTML = "$" + (subtotal * tax).toFixed(2);
    }

    if ((subtotal * tax) + subtotal < 10) {
        document.getElementById('total').innerHTML = "$0" + ((subtotal * tax) + subtotal).toFixed(2);
    } else {
        document.getElementById('total').innerHTML = "$" + ((subtotal * tax) + subtotal).toFixed(2);
    }

    
}

function calculateTotal() {
    total = (subtotal * 0.0885) + subtotal;
}

function getPricesDelete(itemRow){
    let deleteChildren = itemRow.childNodes;
    let deleteItemPrice = deleteChildren[2].innerHTML;
    deleteItemPrice = deleteItemPrice.substring(1, 2);
    subtotal -= deleteItemPrice;
}

function getPrices(item, num, matchedItem) {
    var txt;
    fName = {"fName":item};
    dbParam = JSON.stringify(fName);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            items_price = this.responseText;
            let result = items_price[11];
            calculateSubtotal(result);
            result2 = formatFunction(result);
            if(!matchedItem) {
                let id = "itemPrice" + num;
                document.getElementById(id).innerHTML = result2;
            }
            
            
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
    let formatted;
    console.log(result);
    formatted = "$" + result + ".00";
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

function cashCredit(){
    document.querySelector(".submit").style.display = "none";
    document.querySelector("#cash").style.display = "inline";
    document.querySelector("#credit").style.display = "inline";
}