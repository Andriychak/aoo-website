document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Мобільне меню
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileNav = document.getElementById('mobileNav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (burgerMenu && mobileNav) {
        burgerMenu.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            burgerMenu.classList.toggle('active');
        });

        // Закриття меню при кліку на посилання
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                burgerMenu.classList.remove('active');
            });
        });
    }

    // 2. Плавний скрол для всіх якірних посилань (включаючи логотип)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Вираховуємо висоту хедера для коректного зміщення
                const headerOffset = document.querySelector('.header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 3. FAQ Акордеон
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            // Закриваємо всі інші активні елементи (опціонально, але зручно)
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Якщо елемент не був активним, відкриваємо його
            if (!isActive) {
                item.classList.toggle('active');
            }
        });
    });

    // 4. Динамічна дата в футері
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }



    // 5. Випадковий фон для секції hero
    const hero = document.querySelector('.hero');
    if (hero) {
        let backgroundCount = 2; // Кількість доступних фонових зображень
        function getrandom() {
            return Math.floor(Math.random() * backgroundCount) + 1;
        }
        hero.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))," + " url('img/hero/background" + getrandom() + ".jpg')";
    }
});