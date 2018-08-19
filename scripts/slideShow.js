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

/*
var viewportWidth=0;
var viewportHeight=0;

function getDimetions() {
    if (typeof window.innerWidth != 'undefined') {
        // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
        viewportWidth = window.innerWidth;
        viewportHeight = window.innerHeight;
    } else if (
        typeof document.documentElement != 'undefined' &&
        typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0
    ) {
        // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
        viewportWidth = document.documentElement.clientWidth;
        viewportHeight = document.documentElement.clientHeight;
    } else {
        // older versions of IE
        viewportWidth = document.getElementsByTagName('body')[0].clientWidth;
        viewportHeight = document.getElementsByTagName('body')[0].clientHeight;
    }
    
    //console.log(viewportWidth+'x'+viewportHeight);
    //reCalculateDimentions();
}

var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener (type, callback, false);
    } else {
        object["on"+type] = callback;
    }
};

getDimetions();
addEvent (window, 'resize', getDimetions);

function reCalculateDimentions() {
    var img = document.getElementById ("slide");
    
    if (img.naturalWidth/img.naturalHeight > viewportWidth/viewportHeight) {
        var w = viewportWidth-20;
        if (w > img.naturalWidth) {
            w = img.naturalWidth;
        }
        //console.log ('w = '+w);
        img.style.width = w+'px';
        img.style.height = 'auto';
    } else {
        var h = viewportHeight-20;
        if (h > img.naturalHeight) {
            h = img.naturalHeight;
        }
        //console.log ('h = '+h);
        img.style.height = h+'px';
        img.style.width = 'auto';
    }
    
    img.style.left = ((viewportWidth - img.clientWidth) / 2) + 'px';
    img.style.top = ((viewportHeight - img.clientHeight) / 2) + 'px';
}
*/