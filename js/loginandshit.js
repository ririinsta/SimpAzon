var cid = document.getElementById("citizenid"); //matches with cids
var pid = document.getElementById("usernumber"); //match with cids
function setAllCookies(){
    setCookie("accounts", CryptoJS.AES.encrypt('{"1": "Test"}'));
    setCookie("accountCIDs", CryptoJS.AES.encrypt('{"1": "AAAA"}'));
}
function login(){
    if (getCookie("localtesting") == "true"){
        var check = document.getElementById("accountDebug").value;
        var users = CryptoJS.AES.decrypt(getCookie("accounts")); //Usernames
        var cids = CryptoJS.AES.decrypt(getCookie("accountCIDs")); //Citizen IDs
        if (check == "on"){
            users = document.getElementById("accountUNDs").value;
            cids = document.getElementById("accountCIDs").value;
        }
        if (cids[cid.value] != null){
            alert("username: " + users[cid]);
            setCookie("userid", cid.value+"."+pid.value, 10);
            var login = document.getElementById("loginmodal");
            login.style.display = "none";
            document.location = document.location + "?uid=yes";
            return cid.value+"."+pid.value;
        } else {
            var login = document.getElementById("loginmodal");
            login.style.display = "none";
            return false;
        }
    }
}
function consoleLog(ccid, ccids){
    if (getCookie("localtesting") == "true"){
        var users = getCookie("accounts"); //Usernames
        var cids = getCookie("accountCIDs"); //Citizen IDs
        
        if (cids[ccid] != null){
            alert("username: " + users[ccid]);
            setCookie("userid", ccid.value+"."+ccids.value, 10)
            return ccid.value+"."+ccids.value;
        } else {
            return false;
        }
    }
}
function checkLogin(){
    if(getCookie("userid") == ""){
        lmodelOpen();
    } else {

    }
}