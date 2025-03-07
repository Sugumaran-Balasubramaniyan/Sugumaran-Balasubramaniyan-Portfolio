document.querySelector(".burger").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("nav-active");
});

// Smooth scrolling
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
