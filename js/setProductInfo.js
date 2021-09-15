var itemis;
var itemqs;
var itemns;
var itemps;
var itemIndex = getUrlVars()["pid"] - 1;

document.onload = setProduct();
function setProduct(){
    itemis = ["img/1.png", "", "", "", "", ""];
    itemqs = [10, , 0, 0, 0, 0];
    itemns = ["Wood (Long Distance Only)", "", "", "", "", ""];
    itemps = [3, , 0, 0, 0, 0];
    var name = document.getElementById("productname");
    var image = document.getElementById("productpicture");
    var description = document.getElementById("discription");
    var price = document.getElementById("productprice");

    document.getElementById("title").text = "SimpAzon | " + itemns[itemIndex];
    name.textContent = itemns[itemIndex];
    image.src = itemis[itemIndex];
    price.textContent = "C$" + itemps[itemIndex];
}