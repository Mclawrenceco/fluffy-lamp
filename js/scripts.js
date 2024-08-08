document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
document.getElementById('download-cv').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'assets/Babatunde\'s C.V.pdf';
    link.download = 'Babatunde\'s C.V.pdf';
    link.click();
});

            }
        });
    });
});
