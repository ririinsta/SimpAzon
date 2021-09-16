// Get the modal
var pmodal;

// Get the <span> element that closes the modal
var span;

document.onload = open();
function open(){
    span = document.getElementsByClassName("close")[0];
    pmodal = document.getElementById("purchasemodal");
}
function modelOpen(){
    pmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    pmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == pmodal) {
        pmodal.style.display = "none";
    }
} 