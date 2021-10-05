var usernames = {"AAAA": "Test"}; //Usernames
var cid = {'AAAA': 1};     //CIDs
var orders = {'AAAA': ['1']}; //Orders
var homeid = {'AAAA': "3 Government Way, Saint Petersburg, Main Distric 001"};     //Home ID
var userPID = getCookie("userid").split(".")[1];

var error0x001 = {"errorid": "0x001", "description": "User is not logged in."};

function loggedIn(){
    if (userPID == undefined){
        return false;
    } else {
        return true;
    }
}

function getUserOrders(){
    if (loggedIn){
        var returnvalue = {"userid": cid[userPID], "orders": orders[userPID], "error": undefined};
        return returnvalue;
    } else {
        return {"userid": undefined, "orders": undefined, "error": error0x001};
    }
    
}
function getUserCID(){
    if (loggedIn){
        var returnvalue = {"userid": cid[userPID], "error": undefined};
        return returnvalue;
    } else {
        return {"userid": undefined, "error": error0x001};
    }
}
function getUserName(){
    if (loggedIn){
        var returnvalue = {"userid": cid[userPID], "username": usernames[userPID], "error": undefined};
        return returnvalue;
    } else {
        return {"userid": undefined, "username": undefined, "error": error0x001};
    }
    
}
function getUserHomeID(){
    if (loggedIn){
        var returnvalue = {"userid": cid[userPID], "homeid": homeid[userPID], "error": undefined};
        return returnvalue;
    } else {
        return {"userid": undefined, "homeid": undefined, "error": error0x001};
    }
}
function setUserOrders(newOrderList){
    if (loggedIn){
        orders[userPID] = newOrderList;
        return true;
    } else {
        return {"error": error0x001};
    }
}
function loginButton(){
    if (loggedIn()){
        umodelOpen();
    } else {
        lmodelOpen();
    }
}
function findUser(PlayerCid){
    if (cid[PlayerCid] != undefined){
        return {"userid": cid[PlayerCid], "username": usernames[PlayerCid], "orders": orders[PlayerCid], "homeid": homeid[PlayerCid]};
    }
}
function signIn(){
    var PlayerCid = document.getElementById("citizenid").textContent;
    var PlayerPid = document.getElementById("usernumber").textContent;
    
}