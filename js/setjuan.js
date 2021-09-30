var items;
var itemsi;
var itemsp;
var itemsn;
var itemis;
var itemqs;
var itemns;
var itemps;

function setProductList(){
    items = [document.getElementById("imq1"), document.getElementById("imq2"), document.getElementById("imq3"), document.getElementById("imq4"), document.getElementById("imq5"), document.getElementById("imq6")];
    itemsi = [document.getElementById("imi1"), document.getElementById("imi2"), document.getElementById("imi3"), document.getElementById("imi4"), document.getElementById("imi5"), document.getElementById("imi6")];
    itemsp = [document.getElementById("imp1"), document.getElementById("imp2"), document.getElementById("imp3"), document.getElementById("imp4"), document.getElementById("imp5"), document.getElementById("imp6")]
    itemsn = [document.getElementById("imn1"), document.getElementById("imn2"), document.getElementById("imn3"), document.getElementById("imn4"), document.getElementById("imn5"), document.getElementById("imn6")]
    itemis = ["img/1.png", "", "", "", "", ""];
    itemqs = [10, , 0, 0, 0, 0];
    itemns = ["Wood (Long Distance Only)", "", "", "", "", ""];
    itemps = [3, , 0, 0, 0, 0];
    var index = 0;
    items.forEach(element => {
        if (itemqs[index] == 0){
            element.style = "display: none;";
        } else {
            element.textContent = "x" + itemqs[index];
        }
        index++;
    });
    var index = 0;
    itemsi.forEach(element => {
        if (itemis[index] == ""){
            element.style = "display: none;";
        } else {
            element.textContent = itemps[index];
        }
        index++;
    });
    var index = 0;
    itemsp.forEach(element => {
        if (itemps[index] == 0){
            element.style = "display: none;";
        } else {
            element.textContent = "C$" + itemps[index];
        }
        index++;
    });
    var index = 0;
    itemsn.forEach(element => {
        if (itemns[index] == ""){
            //alert(index++);
            //document.getElementById(index++).style = "display: none;"
            console.log(itemsn[index].textContent);
            element.style = "display: none;";
            element.parentElement.parentElement.style= "display: none;"
        } else {
            element.textContent = itemns[index];
            console.log(element.textContent);
        }
        //console.log(itemns[index])
        index++;
    });
}
