var cid = document.getElementById("citizenid"); //matches with cids
var pid = document.getElementById("usernumber"); //match with cids

function login(){
    if (getCookie("localtesting") == "true"){
        var users = getCookie("accounts"); //Usernames
        var cids = getCookie("accountCIDs"); //Citizen IDs
        
        if (cids[cid] != null){
            alert("username: " + users[cid]);
            setCookie("userid", cid.value+"."+pid.value, 10)
            var login = document.getElementById("loginmodal");
            login.style.display = "none";
            document.location = document.location;
        } else {
            var login = document.getElementById("loginmodal");
            login.style.display = "none";
            document.location = document.location;
        }
    }
}

function checkLogin(){
    if(getCookie("userid") == ""){
        lmodelOpen();
    } else {

    }
}