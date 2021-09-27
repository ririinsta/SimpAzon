window.onload = setAll();
function setAll(){
    onOpen();
    setProduct();
    setUserDetails();
}
function setUserDetails(){
    console.log(getCookie("userid").split(".")[0] + " " + getCookie("userid").split(".")[1])
    var username = fakeuser[getCookie("userid").split(".")[1]];
    //document.getElementById("orders").style.display = "none";
    //document.getElementById("username").style.display = "block";
    document.getElementById("username").textContent = "Username: " + username;
    document.getElementById("balance").textContent = "Balance: 1000";
    document.getElementById("orderamount").textContent = "Orders: " + fakeuser3[getCookie("userid").split(".")[1]][0];
}