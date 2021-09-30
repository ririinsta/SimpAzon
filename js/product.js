var items = [document.getElementById("imq1"), document.getElementById("imq2"), document.getElementById("imq3"), document.getElementById("imq4"), document.getElementById("imq5"), document.getElementById("imq6")]

//document.onload = onOpen();

function setGithubLayout(){
    setCookie("hardcoded", "ririinsta.github.io/product.html", 1);
    setCookie("githubAccounts", '{"1": "Github"}', 1);
    setCookie("githubCIDs", '{"1": "AAAA"}', 1);
}

function getUserDetails(){
    if(getCookie("hardcoded") == "ririinsta.github.io/product.html"){
        var user = getCookie("userid");
        //var username =
    }
}

function onOpen(){
    var username = fakeuser[getCookie("userid").split(".")[1]];
    if(getCookie("userid") == ""){
        document.getElementById("orders").style.display = "none";
        document.getElementById("username").style.display = "block";
        document.getElementById("username").textContent = "Username: " + username;
        document.getElementById("balance").textContent = "Balance: 1000";
        document.getElementById("orderst").textContent = "Orders: " + fakeuser3[getCookie("userid").split(".")[1]][0];
        if (document.location == document.location.host + "product.html"){
            document.getElementById("carttext").textContent = '&#xE033;'
            document.getElementById("buytext").textContent = '&#xE033;'
        }
    } else {
        document.getElementById("orders").style.display = "";
    }
}
function openproduct(index){
    alert(getCookie("hardcoded"));
    document.location = getCookie("hardcoded") + "?pid=" + index;
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}