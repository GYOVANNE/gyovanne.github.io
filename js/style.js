$(document).ready(function () {
    var sideslider = $('[data-toggle=collapse-side]');
    var sel = sideslider.attr('data-target');
    var sel2 = sideslider.attr('data-target-2');
    sideslider.click(function (event) {
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
    });
});

var about = "about";
var home = "home";
var contact = "contact";
var portfolio = "portfolio";
var skills = "skills";
var developmentTools = "development-tools";
var workExperience = 'work-experience'

function getScrol(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

AOS.init({
    duration: 1200,
})
