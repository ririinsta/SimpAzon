function purchase(){
    var currentPageID = getUrlVars()["pid"] - 1;
    var itemis = ["img/1.png", "", "", "", "", ""];
    var itemqs = [10, , 0, 0, 0, 0];
    var itemns = ["Wood (Long Distance Only)", "", "", "", "", ""];
    var itemds = ["Wood", "", "", "", "", ""]
    var itemps = [3, 0, 0, 0, 0, 0];
    var itemst = [10, 0, 0, 0, 0, 0];
    var purchasedetails = {"itemId": null, "itemValue": null, "userHomeID": null, "userBalanceBefore": null, "userBalanceAfter": null};
    purchasedetails["itemId"] = currentPageID + 1;
    purchasedetails["itemValue"] = itemps[currentPageID];
    purchasedetails["userHomeID"] = 1;
    purchasedetails["userBalanceBefore"] = 1000;
    purchasedetails["userBalanceAfter"] = 1000 - purchasedetails["itemValue"];



    return purchasedetails;
}
function sendOrder(){
    var order = purchase();
    
}