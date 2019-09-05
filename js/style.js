function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var about = "about";
var home = "home";
var contact = "contact";
var portfolio = "portfolio";

function getScrol(id){
    var element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
