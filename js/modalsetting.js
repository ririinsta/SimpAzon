function setUserDetails(){
    //console.log(getCookie("userid").split(".")[0] + " " + getCookie("userid").split(".")[1])
    var username = fakeuser[getCookie("userid").split(".")[1]];
    //document.getElementById("orders").style.display = "none";
    //document.getElementById("username").style.display = "block";
    document.getElementById("username").textContent = "Username: " + username;
    document.getElementById("balance").textContent = "Balance: 1000";
    document.getElementById("orderamount").textContent = "Orders: " + getUserOrders[0];
}
function setOrders(){
    itemns = ["Wood (Long Distance Only)", "", "", "", "", ""];
    var orders = fakeuser3;
    var table = document.getElementById("ordertable");
    var amount = 0;
    orders["AAAA"].forEach(orderid => {
        var row = table.insertRow(amount);
        var orderid = row.insertCell(0);
        var itemname = row.insertCell(1);
        orderid.textContent = amount + 1;
        itemname.textContent = itemns[amount];
    });
}