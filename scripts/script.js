document.addEventListener('DOMContentLoaded', () => {
    // Эффект снега
    const snowContainer = document.querySelector('.snow-container');
    for (let i = 0; i < 100; i++) {
        const snow = document.createElement('div');
        snow.className = 'snow';
        snow.style.left = Math.random() * 100 + 'vw';
        snow.style.animationDuration = Math.random() * 5 + 2 + 's';
        snow.style.opacity = Math.random();
        snowContainer.appendChild(snow);
    }

    // Плавный скролл при клике на ссылки
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

    // Кнопка "Back to Top"
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.style.display = 'flex';
            setTimeout(() => {
                backToTopButton.style.opacity = '1';
            }, 10); // Небольшая задержка для перехода opacity
        } else {
            backToTopButton.style.opacity = '0';
            setTimeout(() => {
                backToTopButton.style.display = 'none';
            }, 300); // Соответствует времени перехода opacity
        }
    });
    
    // Прокручиваем страницу вверх при нажатии на кнопку
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Плавная прокрутка
        });
    });

    // Обработка формы контактов
    const contactForm = document.querySelector('.contact-section form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Здесь можно добавить отправку данных на сервер через AJAX
            contactForm.reset();
            alert('Ваше сообщение отправлено!');
        });
    }
});
