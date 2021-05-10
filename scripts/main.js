var receipt = [""];
var order = [];
var txt;
let subtotal = 0;
let deletePriceResult = 0;
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
    let x = 1;

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
        inner3.setAttribute("class", "col-md-2");
        inner5.setAttribute("class", "col-md-2");
        qtyID = "quantity" + num;
        inner4.setAttribute("class", "quantity");
        inner4.id = "quantity" + num;

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
    number = document.getElementById("quantity" + x).innerHTML;
    txt = receipt[x];
    ++x;
    order.push(txt);
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
    }
    
}

function submitReceipt() {
    let i = 1
    order.forEach(calculateSubtotal);
    // calculateSubtotal();
}


function calculateSubtotal(result) {
    let subtotal1;
    let x = 1;
    price = parseInt(result);
    subtotal1 = price;
    subtotal += subtotal1;
    subtotalToPage(subtotal);
}

function subtotalToPage(){
    tax = 0.045;
    document.getElementById('subtotal').innerHTML = "$" + subtotal + ".00";
    document.getElementById('tax').innerHTML = "$" + (subtotal * tax).toFixed(2);
    document.getElementById('total').innerHTML = "$" + ((subtotal * tax) + subtotal).toFixed(2);
}

function calculateTotal() {
    total = (subtotal * 0.045) + subtotal;
    console.log(total);
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

function cashCredit(){
    document.querySelector(".submit").style.display = "none";
}