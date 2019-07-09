var currentSlide;

function openSlideShow(slideNumber) {
    document.getElementById("slideShow").style.display = "block";
    setCurrentSlide(slideNumber);
}

function closeSlideShow() {
    document.getElementById("slideShow").style.display = "none";
}

function incrementSlide(amount) {
    setCurrentSlide(currentSlide + amount);
}

function setCurrentSlide(newSlide) {
    var slides = document.getElementsByClassName("slide");
    var numSlides = slides.length;
    
    for (var i = 0; i < numSlides; ++i) {
        slides[i].style.display = "none";
    }
    
    newSlide -= 1;
    currentSlide = ((newSlide % numSlides) + numSlides) % numSlides;
    slides[currentSlide].style.display = "block";
    currentSlide += 1;
}
