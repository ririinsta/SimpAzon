var itemis;
var itemqs;
var itemns;
var itemps;
var itemIndex = getUrlVars()[pid] - 1;

windows.onLoad() = function (){
    itemis = ["img/1.png", "", "", "", "", ""];
    itemqs = [10, , 0, 0, 0, 0];
    itemns = ["Wood (Long Distance Only)", "", "", "", "", ""];
    itemps = [3, , 0, 0, 0, 0];
    setProduct();
}

function setProduct(){
    var name = document.getElementById("productname");
    var image = document.getElementById("productpicture");
}