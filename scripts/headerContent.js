function printHeader (pathPrefix) {
    var headerString = '\
    <header class="clearfix">\
        <!-- Title -->\
        <a href="' + pathPrefix + 'index.html"><div id="title">\
            <h1>Rahul Joshi</h1>\
            <h2>I design and develop games</h2>\
        </div></a>\
        <!-- Contact Me -->\
        <p id="contactMe">\
            <a href="mailto:rahul.j@nyu.edu">rahul.j@nyu.edu</a><br />\
            <a href="' + pathPrefix + 'aboutMe/index.html">About Me</a><br />\
            <a href="' + pathPrefix + 'aboutMe/RahulJoshi_Resume.pdf">Resume</a>\
        </p>\
    </header>';

    document.body.insertAdjacentHTML ( 'afterbegin', headerString);
}
