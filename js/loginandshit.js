var cid = document.getElementById("citizenid");
var pid = document.getElementById("usernumber");

function login(){
    setCookie("userid", cid.value+"."+pid.value, 10)
    var login = document.getElementById("loginmodal");
    login.style.display = "none";
    document.location = document.location;
}

function checkLogin(){
    if(getCookie("userid") == ""){
        lmodelOpen();
    } else {

    }
}