var itemis;
var itemqs;
var itemns;
var itemps;
var itemIndex = getUrlVars()["pid"] - 1;

document.onload = setProduct();
function setProduct(){
    var purchasebutton = document.getElementsByClassName("purchase")[0];
    var addtocart = document.getElementsByClassName("addtocart")[0];
    if (loggedIn){

    } else {
        purchasebutton.style.display = "none";
        addtocart.style.display = "none";
    }
    itemis = ["img/1.png", "", "", "", "", ""];
    itemqs = [10, , 0, 0, 0, 0];
    itemns = ["Wood (Long Distance Only)", "", "", "", "", ""];
    itemds = ["Wood", "", "", "", "", ""]
    itemps = [3, 0, 0, 0, 0, 0];
    itemst = [10, 0, 0, 0, 0, 0];
    var name = document.getElementById("productname");
    var image = document.getElementById("productpicture");
    var description = document.getElementById("discription");
    var price = document.getElementById("productprice");
    var productstat = document.getElementById("productindacator");
    var amount = document.getElementById("amount");
    if (amount == null){

    } else {
        amount.value = itemst[getUrlVars()["pid"]-1];
    }

    document.getElementById("title").text = "SimpAzon | " + itemns[itemIndex];
    name.textContent = itemns[itemIndex];
    image.src = itemis[itemIndex];
    price.textContent = "C$" + itemps[itemIndex];
    description.textContent = itemds[itemIndex];
    if (itemst[itemIndex] <= 10){

    } else {
        productstat.style.display = "none";
    }
}
function setQuantity(){
    var amount = document.getElementById("amount").value;
    itemst[itemIndex] = amount; 
    if (itemst[itemIndex] <= 10){

    } else {
        document.getElementById("productindacator").style.display = "none";
    }
}