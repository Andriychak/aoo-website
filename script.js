document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileNav = document.getElementById('mobileNav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (burgerMenu && mobileNav) {
        burgerMenu.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            burgerMenu.classList.toggle('active');
        });

        // Closing menu on link click
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                burgerMenu.classList.remove('active');
            });
        });
    }

    // 2. Smooth scroll for all anchor links (including logo)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calculate header height for correct offset
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

    // 3. FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            // Close all other accordion items
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Open the clicked item if it was not active
            if (!isActive) {
                item.classList.toggle('active');
            }
        });
    });

    // 4. Dynamic Dates in Document
    const yearSpan = document.getElementById('year');
    const experienceSpan = document.getElementById('experience');
    const experienceStartYear = 2010;
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    if (experienceSpan) {
        const currentYear = new Date().getFullYear();
        const experienceYears = currentYear - experienceStartYear;
        experienceSpan.textContent = `${experienceYears} ${experienceYears.toString().endsWith('1') && !experienceYears.toString().endsWith('11') ? 'року' : 'років'}`;
    }


    // 5. Random Hero Background
    const hero = document.querySelector('.hero');
    if (hero) {
        let backgroundCount = 3; // Number of available background images
        function getRandom() {
            return Math.floor(Math.random() * backgroundCount) + 1;
        }
        hero.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))," + " url('img/hero/background" + getRandom() + ".webp')";
    }
});