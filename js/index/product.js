var items = [document.getElementById("imq1"), document.getElementById("imq2"), document.getElementById("imq3"), document.getElementById("imq4"), document.getElementById("imq5"), document.getElementById("imq6")]
function openproduct(index){
    alert(getCookie("hardcoded"));
    document.location = getCookie("hardcoded") + "?pid=" + index;
}