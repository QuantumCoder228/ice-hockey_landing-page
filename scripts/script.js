document.addEventListener('DOMContentLoaded', () => {
    // Snow Effect
    const snowContainer = document.querySelector('.snow-container');
    for (let i = 0; i < 100; i++) {
        const snow = document.createElement('div');
        snow.className = 'snow';
        snow.style.left = Math.random() * 100 + 'vw';
        snow.style.animationDuration = Math.random() * 5 + 2 + 's';
        snow.style.opacity = Math.random();
        snowContainer.appendChild(snow);
    }

    // Smooth Scroll for Navigation Links
    const links = document.querySelectorAll('nav .menu a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.style.display = 'flex';
            setTimeout(() => {
                backToTopButton.style.opacity = '1';
            }, 10); // Slight delay for opacity transition
        } else {
            backToTopButton.style.opacity = '0';
            setTimeout(() => {
                backToTopButton.style.display = 'none';
            }, 300); // Matches the opacity transition duration
        }
    });
    
    // Scroll to Top on Button Click
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    // Contact Form Handling
    const contactForm = document.querySelector('.contact-section form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Here you can add AJAX form submission if needed
            contactForm.reset();
            alert('Your message has been sent!');
        });
    }
});