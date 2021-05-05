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

    for (let i = 0; i < receipt.length; i++) {
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
        formElementCount = formElementCount - 2;
        document.getElementById(element).remove();
        reformatIDs(formElementCount, element);
        
        for(i = 0; i < receipt.length; i++){
            if (receipt[i] == element) {
                receipt.splice(i, 1)
                break;
            }
        
    }
    }

    
}

function reformatIDs(formElementCount) {

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
