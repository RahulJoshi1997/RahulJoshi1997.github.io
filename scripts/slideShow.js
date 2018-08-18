function openSlide(img) {
    document.getElementById("slideShow").style.display = "block";
    document.getElementById("slide").style.backgroundImage = "url('../" + img + "')";
}

function closeSlide() {
    document.getElementById("slideShow").style.display = "none";
}