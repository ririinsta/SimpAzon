var fakeuser = {"AAAA": "Test"}; //Usernames
var fakeuser2 = {'AAAA': 1};     //CIDs
var fakeuser3 = {'AAAA': ['1']}; //Orders
var fakeuser4 = {'AAAA': 3};     //Home ID
var userPID = getCookie("userid").split(".")[1];

function getUserOrders(){
    return fakeuser3[userPID];
}
function getUserCID(){
    return fakeuser2[userPID];
}
function getUserName(){
    return fakeuser[userPID];
}
function getUserHomeID(){
    return fakeuser4[userPID];
}
function setUserOrders(newOrderList){
    fakeuser3 = newOrderList;
}