// ===== Intersection Observer for Fade-in Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';

            // Unobserve after animation
            fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-up');
    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
});

// ===== Skills Progress Bar Animation =====
const skillBars = document.querySelectorAll('.skill-bar');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const targetWidth = bar.getAttribute('data-width');

            // Animate the progress bar
            setTimeout(() => {
                bar.style.width = targetWidth + '%';
            }, 300);

            skillObserver.unobserve(bar);
        }
    });
}, observerOptions);

// Observe skill bars
skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ===== Counter Animation (Years of Experience) =====
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Trigger counter animation when visible
const counterElement = document.getElementById('years-counter');
if (counterElement) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(counterElement, 25, 2000);
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counterObserver.observe(counterElement);
}

// ===== Project Cards Stagger Animation =====
const projectCardsContainer = document.getElementById('projects-container');

if (projectCardsContainer) {
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cards = entry.target.querySelectorAll('.project-card');

                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('show');
                    }, index * 150); // Stagger delay
                });

                projectObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    projectObserver.observe(projectCardsContainer);
}

// ===== Parallax Effect for Hero Section (Optional) =====
const heroSection = document.getElementById('hero');

if (heroSection && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;

        if (scrolled < window.innerHeight) {
            heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// ===== Smooth Reveal for Cards on Hover =====
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.bg-card-bg');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// ===== Typing Effect for Hero Title (Optional Enhancement) =====
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Uncomment to enable typing effect
// const heroTitle = document.querySelector('#hero h1');
// if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 150);
// }

// ===== Add smooth transitions on scroll =====
let ticking = false;

function updateAnimations() {
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateAnimations);
        ticking = true;
    }
});
