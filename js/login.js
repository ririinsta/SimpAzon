var cid = document.getElementById("citizenid"); //matches with cids
var pid = document.getElementById("usernumber"); //match with cids
function login(){
    var fakeuser = {"AAAA": "Test"}; //Usernames
    var fakeuser2 = {'AAAA': 1}; //CIDs
    var fakeuser3 = {'AAAA': ['1']} //Orders
    if (fakeuser2[pid.value].toString() == cid.value){
        setCookie('userid', cid.value+pid.value, 1);
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