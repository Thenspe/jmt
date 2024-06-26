//  Javascript function for navbar and responsive design 
function navFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}
console.log("Does this work?");

const para = document.createElement("h3");
para.innerHTML = "There is other content going here.";
document.getElementById("notflippy").appendChild(para);

const nodes = ["pro1","pro2","pro3","pro4","pro5","pro6","pro7","pro8"];
const clones = ["proA","proB","proC","proD","proE","proF","proG","proH"];
for(let i in nodes) {
    const node = document.getElementById(nodes[i]);
    const clone = node.cloneNode(true);
    document.getElementById(clones[i]).appendChild(clone);
}