$(document).ready(function() {
    $('p, h1, h2, h3, h4, h5, img, table, thead, tr').addClass('fade-in');
});

function fadeInOnScroll() {
    const fadeInElements = document.querySelectorAll('.fade-in:not(.Showinstant)');
    fadeInElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;
        if (elementTop < viewportHeight && elementBottom >= 0) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
            element.style.transition = 'opacity 1s ease, transform 1s ease';
            element.classList.remove('fade-in');
        }
    });
}

document.addEventListener('scroll', fadeInOnScroll);