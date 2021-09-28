var cid = document.getElementById("citizenid"); //matches with cids
var pid = document.getElementById("usernumber"); //match with cids
var fakeuser = {"AAAA": "Test"}; //Usernames
var fakeuser2 = {'AAAA': 1}; //CIDs
var fakeuser3 = {'AAAA': ['1']};
function login(){
    var fakeuser = {"AAAA": "Test"}; //Usernames
    var fakeuser2 = {'AAAA': 1}; //CIDs
    var fakeuser3 = {'AAAA': ['1']} //Orders
    if (fakeuser2[pid.value].toString() == cid.value){
        setCookie('userid', cid.value+"."+pid.value, 1);
        document.location = document.location;
    } else {

    }
}
function logout(){
    setCookie("userid", "invalid", -1)
    document.location = document.location;
}
function consoleLog(pid, cid){
    var fakeuser = {"AAAA": "Test"}; //Usernames
    var fakeuser2 = {'AAAA': 1}; //CIDs
    var fakeuser3 = {'AAAA': ['1']} //Orders
    if (fakeuser2[pid].toString() == cid){
        setCookie('userid', cid+"."+pid, 1);
        return true;
    } else {
        return false;
    }  
}
function checkLogin(){
    if(getCookie("userid") == ""){
        lmodelOpen();
    } else {
        umodelOpen();
    }
}