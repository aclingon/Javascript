function countdown() { //define function //
    var seconds = document.getElementById("seconds").value; //define variable//

    function tick() { //internal function def//
        seconds = seconds - 1; 
        timer.innerHTML = seconds; 
        var time = setTimeout(tick, 1000); 
        if (seconds == -1) { //if statement //
            alert("Time's up!"); //alert when timer is done//
            clearTimeout(time);  
            timer.innerHTML= "";
        }
    }
    tick(); //preform function //
}

var slideIndex =1; 
showSlides(slideIndex);

//Nex/ previous controls //
function plusSlides(n) {
    showSlides(slideIndex += n);
}
//Thumbnail image controls //
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) { //define function //
    var i; //define new variable //
    var slides = document.getElementsByClassName("mySlides"); //defin variable //
    var dots = document.getElementsByClassName("dot"); //define variable//
    if (n > slides.length) {slideIndex = 1} //if statement //
    if (n < 1) {slideIndex = slides.length} 
    for (i = 0; i < slides.length; i++) { //for loop with increment //
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { // for loop //
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
}