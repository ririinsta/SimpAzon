window.onload = setAll();
function setAll(){
    onOpen();
    if (getCookie("hardcoded") == undefined){
        alert("Set Hardcoded!");
    }
    if (window.location != getCookie("hardcoded")){
        setProductList();
    } else {
        setProduct();
    }
    setUserDetails();
    setOrders();
}
function onOpen(){
    var username = fakeuser[getCookie("userid").split(".")[1]];
    if(getCookie("userid") == ""){
        document.getElementById("orders").style.display = "none";
        document.getElementById("username").style.display = "block";
        document.getElementById("username").textContent = "Username: " + username;
        document.getElementById("balance").textContent = "Balance: 1000";
        document.getElementById("orderamount").textContent = "Orders: " + getUserOrders[0];
        if (document.location == document.location.host + "product.html"){
            document.getElementById("carttext").textContent = '&#xE033;'
            document.getElementById("buytext").textContent = '&#xE033;'
        }
    } else {
        document.getElementById("orders").style.display = "";
    }
}