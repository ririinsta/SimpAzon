var pmodal;
var lmodal;
var dmodal;
var span;
var spanl;
var spand;
document.onload = open();
function open(){
    span = document.getElementsByClassName("close")[0];
    spanl = document.getElementById("close");
    spand = document.getElementById("dclose");
    uclose = document.getElementById("uclose");
    oclose = document.getElementById("oclose");
    pmodal = document.getElementById("purchasemodal");
    lmodal = document.getElementById("loginmodal");
    dmodal = document.getElementById("debugmodal");
    umodal = document.getElementById("usermodal");
    omodal = document.getElementById("ordermodal");
}
function omodalOpen()  {
    omodal.style.display = "block";
}
function umodelOpen(){
    umodal.style.display = "block";
}
function pmodelOpen(){
    pmodal.style.display = "block";
}
function lmodelOpen(){
    lmodal.style.display = "block";
}
function dmodelopen(){
    dmodal.style.display = "block";
}
oclose.onclick = function(){
    omodal.style.display = "none";
}
uclose.onclick = function(){
    umodal.style.display = "none";
}
span.onclick = function() {
    pmodal.style.display = "none";
}
spanl.onclick = function() {
    lmodal.style.display = "none";
}
spand.onclick = function() {
    dmodal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == pmodal) {
        pmodal.style.display = "none";
    }
} 