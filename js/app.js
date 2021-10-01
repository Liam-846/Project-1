
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// UI
const body = document.querySelectorAll('.btnripple');
// console.log(buttons);
body.forEach(body => {
    // console.log('button');

    body.addEventListener('click', (e) => {
        // console.log('im working');

        const cx = e.clientX;
        const cy = e.clientY;
        // console.log(cy);

        const btntop = e.target.offsetTop;
        const btnleft = e.target.offsetLeft;
        // console.log(btnleft);

        const xinside = cx - btnleft;
        const yinside = cy - btntop;
        // console.log(xinside,yinside);

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yinside + "px";
        circle.style.left = xinside + "px";

        // console.log(circle);

        // console.log(e.target);
        e.target.appendChild(circle);


    })
});