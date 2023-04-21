//Toggle responsive class to top-nav
function navbarToggle() {
    var x = document.getElementById("myTopnav");
    if(x.className === "topnav") { 
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//Function for alternating policy section
function privacyActivate() {
    var x = document.getElementById("privacyHead");
    var y = document.getElementById("termsHead");
    var z = document.getElementById("privacyContent");
    var w = document.getElementById("termsContent");
    if(x.className === "privHd") { 
        x.className += " activate";
    } 
    if(y.className === "termHd activate") {
        y.className = "termHd";
    }
    if(z.className === "invis") {
        z.className = "vis";
    }
    if(w.className === "vis") {
        w.className = "invis";
    }
}

function termsActivate() {
    var x = document.getElementById("termsHead");
    var y = document.getElementById("privacyHead");
    var z = document.getElementById("termsContent");
    var w = document.getElementById("privacyContent");
    if(x.className === "termHd") { 
        x.className += " activate";
    } 
    if(y.className === "privHd activate") {
        y.className = "privHd";
    }
    if(z.className === "invis") {
        z.className = "vis";
    }
    if(w.className === "vis") {
        w.className = "invis";
    }
}

//Slideshow functions
let slideIndex = 1;
showSlide(slideIndex);

//next/previous control
function plusSlide(n) {
    showSlides(slideIndex += n);
}

//Thumbnail Image Control
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if(n>slides.length){
        slideIndex = 1
    }
    if(n<1) {
        slideIndex = slides.length;
    }
    for (i = 0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active2","");
    }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += " active2";
}