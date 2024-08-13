// typing vars
var messageArray = ["About Me", "Experience", "Education", "Projects", "Contact Me"]; // title texts that will be typed out on the pages
var querySelector = ["#about-me-title", "#experience-title", "#education-title", "#projects-title", "#contact-title"]; // IDs for the texts that will be typed out
var urls = ["about.html", "experience.html", "education.html", "projects.html", "contact.html"]; // page urls of the IDs (location)
var textPosition = 0; 
var speed = 100;
var querySelectorNum = 0; // manages which querySelector is accessed (indexed)
var selector = ""; // blank string that will hold the ID (once accessed)

// fading navbar vars
var lastScrollPosition = 0;

// typing animation
typewriter = () => {
    // loop iterates through the url array (page urls) to see if the current page matches up with one of the urls; then accesses the certain id on the page (title id) to create typing effect
    for(var i = 0; i < messageArray.length; i++) {
        if(document.URL.includes(urls[i])) {
            selector = querySelector[i]; // matches up ID here
            querySelectorNum = i; // retrieves index of title text
        }
    }

    document.querySelector(selector).
    innerHTML = messageArray[querySelectorNum].substring(0, textPosition) + "<span>\u25ae</span>";

    if(textPosition ++ != messageArray[querySelectorNum].length) {
        setTimeout(typewriter, speed);
    }
}

window.addEventListener("load", typewriter) // "load" = on page load