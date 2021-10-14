var items = [document.getElementById("imq1"), document.getElementById("imq2"), document.getElementById("imq3"), document.getElementById("imq4"), document.getElementById("imq5"), document.getElementById("imq6")]
function openproduct(index){
    //alert(getCookie("hardcoded"));
    if (document.location.pathname.includes("index.php")){
        alert("Unable to change locations");
    } else {
        document.location = document.location.origin + document.location.pathname + "product.php" + "?pid=" + index;
    }
}