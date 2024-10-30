// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
});

// Scroll Animation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.background = 'white';
    }
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounter = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounter, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Trigger counter animation when section is in view
const observerOptions = {
    threshold: 0.7,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter();
        }
    });
}, observerOptions);

document.querySelectorAll('.floating-cards').forEach((section) => {
    observer.observe(section);
});

// Parallax Effect
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.glass-card');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;

        const angleX = (mouseY - cardY) / 30;
        const angleY = (mouseX - cardX) / -30;

        card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
});

// Neon Button Hover Effect
document.querySelectorAll('.neon-button').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty('--x', `${x}px`);
        button.style.setProperty('--y', `${y}px`);
    });
});

// Add this to your HTML head section
// <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet"> 

// Testimonials Slider
const testimonialsContainer = document.querySelector('.testimonials-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

nextBtn.addEventListener('click', () => {
    testimonialsContainer.scrollBy({
        left: 380,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    testimonialsContainer.scrollBy({
        left: -380,
        behavior: 'smooth'
    });
});

// Faculty Card Hover Effect
document.querySelectorAll('.faculty-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Smooth reveal animation for faculty cards
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const fadeInElements = document.querySelectorAll('.faculty-card, .testimonial-card');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

fadeInElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(element);
});

// Initialize Particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ff6b00'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ff6b00',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// Dynamic color shift for cards
document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const angleX = (y - centerY) / 10;
        const angleY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
        
        const gradient = `radial-gradient(circle at ${x}px ${y}px, 
            rgba(255, 107, 0, 0.2) 0%, 
            rgba(255, 107, 0, 0.1) 30%, 
            transparent 70%)`;
            
        card.style.background = gradient;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        card.style.background = 'rgba(255, 255, 255, 0.1)';
    });
});

// Add this to your HTML head section
// <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>

// Dynamic text color shift
const letters = document.querySelectorAll('.main-title span');
letters.forEach((letter, index) => {
    letter.addEventListener('mouseover', () => {
        letter.style.color = '#ffffff';
        letter.style.transform = 'scale(1.2)';
        letter.style.transition = 'all 0.3s ease';
    });

    letter.addEventListener('mouseout', () => {
        letter.style.color = '#ff69b4';
        letter.style.transform = 'scale(1)';
    });
});

// Parallax effect for sections
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.glow-section');
    sections.forEach(section => {
        const distance = window.scrollY - section.offsetTop;
        const parallaxSpeed = 0.5;
        
        if (Math.abs(distance) < window.innerHeight) {
            section.style.backgroundPositionY = `${distance * parallaxSpeed}px`;
        }
    });
});

// Dynamic glow effect for service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const glow = card.querySelector('.hover-glow');
        glow.style.background = `radial-gradient(circle at ${x}px ${y}px,
            rgba(255, 255, 255, 0.3) 0%,
            transparent 70%)`;
    });
});

// Intersection Observer for section animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.glow-section').forEach(section => {
    sectionObserver.observe(section);
});

// Form input animations
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', () => {
        const glow = input.parentElement.querySelector('.input-glow');
        glow.style.opacity = '1';
    });

    input.addEventListener('blur', () => {
        const glow = input.parentElement.querySelector('.input-glow');
        glow.style.opacity = '0';
    });
});

// About image hover effect
const aboutImage = document.querySelector('.about-image-container img');
if(aboutImage) {
    aboutImage.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = aboutImage.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        aboutImage.style.transform = `scale(1.1) translate(${x * 10}px, ${y * 10}px)`;
    });

    aboutImage.addEventListener('mouseleave', () => {
        aboutImage.style.transform = 'scale(1) translate(0, 0)';
    });
}

// Contact form submission animation
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add success animation
        const button = contactForm.querySelector('button');
        button.innerHTML = '<i class="fas fa-check"></i> Sent!';
        button.style.background = '#ffffff';
        button.style.color = '#ff69b4';
        
        // Reset form after delay
        setTimeout(() => {
            contactForm.reset();
            button.innerHTML = 'Send Message';
            button.style.background = 'transparent';
            button.style.color = '#ff69b4';
        }, 3000);
    });
}

// Update the mouse move effect for cards
document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
        
        const gradient = `radial-gradient(circle at ${x}px ${y}px, 
            rgba(255, 255, 255, 0.2) 0%, 
            rgba(255, 255, 255, 0.1) 30%, 
            transparent 70%)`;
            
        card.style.background = gradient;
    });

    card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(255, 255, 255, 0.05)';
    });
});
