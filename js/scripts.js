document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const backToTopButton = document.getElementById("back-to-top");

    // Toggle dark/light mode
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("light-mode");
    });

    // Smooth scroll for navigation links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Show back-to-top button on scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Scroll back to top
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
