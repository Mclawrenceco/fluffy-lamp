// Theme toggle button
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
navToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
});
