window.onload = setAll();
function setAll(){
    onOpen();
    if (getCookie("hardcoded") == undefined){
        alert("Set Hardcoded!");
    }
    var location = window.location + "";
    if (location.includes(getCookie("hardcoded")) == false){
        setProductList();
    } else {
        setProduct();
    }
    setUserDetails();
    setOrders();
}
function onOpen(){
    var username = getUserName()["username"];
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
function setUserDetails(){
    //console.log(getCookie("userid").split(".")[0] + " " + getCookie("userid").split(".")[1])
    var username = getUserName()["username"];
    //document.getElementById("orders").style.display = "none";
    //document.getElementById("username").style.display = "block";
    document.getElementById("username").textContent = "Username: " + username;
    document.getElementById("balance").textContent = "Balance: 1000";
    document.getElementById("orderamount").textContent = "Orders: " + getUserOrders[0];
}
function setUserDetails(){
    //console.log(getCookie("userid").split(".")[0] + " " + getCookie("userid").split(".")[1])
    var username = getUserName()["username"];
    //document.getElementById("orders").style.display = "none";
    //document.getElementById("username").style.display = "block";
    document.getElementById("username").textContent = "Username: " + username;
    document.getElementById("balance").textContent = "Balance: 1000";
    document.getElementById("orderamount").textContent = "Orders: " + getUserOrders[0];
}
function setOrders(){
    itemns = ["Wood (Long Distance Only)", "", "", "", "", ""];
    var orders = getUserOrders()["orders"];
    if (orders != undefined){
        var table = document.getElementById("ordertable");
        var amount = 0;
        orders.forEach(orderid => {
            var row = table.insertRow(amount);
            var orderid = row.insertCell(0);
            var itemname = row.insertCell(1);
            orderid.textContent = amount + 1;
            itemname.textContent = itemns[amount];
        });
    } else {
        
    }
}