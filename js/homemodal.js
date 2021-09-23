var pmodal;
var lmodal;
var dmodal;
var span;
var spanl;
var spand;
document.onload = open();
function open(){
    spand = document.getElementById("dclose");
    dmodal = document.getElementById("debugmodal");
}
function dmodelopen(){
    dmodal.style.display = "block";
}
spand.onclick = function() {
    dmodal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == pmodal) {
        pmodal.style.display = "none";
    }
} 