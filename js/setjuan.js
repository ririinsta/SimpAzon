document.onload = function () {
    load();
};

function load(){
    var items = [document.getElementById("imq1"), document.getElementById("imq2"), document.getElementById("imq3"), document.getElementById("imq4"), document.getElementById("imq5"), document.getElementById("imq6")];
    var itemsi = [document.getElementById("imi1"), document.getElementById("imi2"), document.getElementById("imi3"), document.getElementById("imi4"), document.getElementById("imi5"), document.getElementById("imi6")];
    var itemsp = [document.getElementById("imp1"), document.getElementById("imp2"), document.getElementById("imp3"), document.getElementById("imp4"), document.getElementById("imp5"), document.getElementById("imp6")]
    var itemsn = [document.getElementById("imn1"), document.getElementById("imn2"), document.getElementById("imn3"), document.getElementById("imn4"), document.getElementById("imn5"), document.getElementById("imn6")]
    var itemis = ["img/1.png", "", "", "", "", ""];
    var itemqs = [10, 0, 0, 0, 0, 0];
    var itemns = ["Wood (Long Distance Only)", "", "", "", "", ""];
    var itemps = [3, 0, 0, 0, 0, 0];
    
    var index = 0;
    items.forEach(element => {
        if (itemqs[index] == 0){
            element.style = "display: none;";
        }
        element.textContent = "x" + itemqs[index];
        index++;
    });
    var index = 0;
    itemsi.forEach(element => {
        if (itemis[index] == 0){
            element.style = "display: none;";
        }
        element.textContent = "x" + itemps[index];
        index++;
    });
    var index = 0;
    itemsp.forEach(element => {
        if (itemps[index] == 0){
            element.style = "display: none;";
        }
        element.textContent = "x" + itemps[index];
        index++;
    });
    var index = 0;
    itemsn.forEach(element => {
        if (itemns[index] == ""){
            element.style = "display: none;";
        }
        element.src = itemns[index];
        console.log(itemns[index])
        index++;
    });
}
