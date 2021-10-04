var usernames = {"AAAA": "Test"}; //Usernames
var cid = {'AAAA': 1};     //CIDs
var orders = {'AAAA': ['1']}; //Orders
var homeid = {'AAAA': "3 Government Way, Saint Petersburg, Main Distric 001"};     //Home ID
var userPID = getCookie("userid").split(".")[1];

function getUserOrders(){
    var returnvalue = {"userid": cid[userPID], "orders": orders[userPID], "error": undefined};
    return returnvalue;
}
function getUserCID(){
    var returnvalue = {"userid": cid[userPID], "error": undefined}
    return returnvalue;
}
function getUserName(){
    var returnvalue = {"userid": cid[userPID], "username": usernames[userPID], "error": undefined};
    return returnvalue;
}
function getUserHomeID(){
    var returnvalue = {"userid": cid[userPID], "homeid": homeid[userPID], "error": undefined};
    return returnvalue;
}
function setUserOrders(newOrderList){
    orders[userPID] = newOrderList;
}