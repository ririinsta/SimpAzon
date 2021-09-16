var pmodal;
var lmodal;
var span;
var spanl;
document.onload = open();
function open(){
    span = document.getElementsByClassName("close")[0];
    spanl = document.getElementById("close");
    pmodal = document.getElementById("purchasemodal");
    lmodal = document.getElementById("loginmodal");
}
function pmodelOpen(){
    pmodal.style.display = "block";
}
function lmodelOpen(){
    lmodal.style.display = "block";
}
span.onclick = function() {
    pmodal.style.display = "none";
}
spanl.onclick = function() {
    lmodal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == pmodal) {
        pmodal.style.display = "none";
    }
} 