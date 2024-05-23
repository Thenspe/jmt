//Function to show/hide the header.
//when user scrolls down, hide navbar. when user scrolls up, show navbar
var prevScrollpos = window.scrollY;
window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        //scrolled up, show header
        document.getElementById("myhead").style.display = "block";
    } else {
        //scrolled down, hide header
        document.getElementById("myhead").style.display = "none";
    }
    prevScrollpos = currentScrollPos;
}

//  Javascript function for navbar and responsive design 
function navFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}