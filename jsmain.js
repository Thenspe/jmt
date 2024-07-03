//  Javascript function for navbar and responsive design 
function navFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}

//sticky header code as per https://www.w3schools.com/howto/howto_js_sticky_header.asp
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myhead");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// writes text into the flippy boxes as needed
const nodes = ["pro1","pro2","pro3","pro4","pro5","pro6","pro7","pro8"];
const clones = ["proA","proB","proC","proD","proE","proF","proG","proH"];
for(let i in nodes) {
    const node = document.getElementById(nodes[i]);
    const clone = node.cloneNode(true);
    document.getElementById(clones[i]).appendChild(clone);
}