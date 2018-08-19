var currentSlide;

function openSlideShow(slideNum) {
    document.getElementById("slideShow").style.display = "block";
    setCurrent(slideNum);
}

function closeSlideShow() {
    document.getElementById("slideShow").style.display = "none";
}

function incrementSlide(amount) {
    setCurrent(currentSlide + amount);
}

function setCurrent(slideNum) {
    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; ++i) {
        slides[i].style.display = "none";
    }
    
    currentSlide = slideNum;
    if (currentSlide < 1) {
        currentSlide = slides.length;
    } else if (currentSlide > slides.length) {
        currentSlide = 1;
    }
    slides[currentSlide - 1].style.display = "block";
}
