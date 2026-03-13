// Sticky Navbar on Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Fade-in Animation on Scroll using Intersection Observer
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Si el enlace es solo "#", scroll al inicio o ignorar para evitar error
        if (href === '#') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
        
        // Cierra otros items abiertos (opcional)
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Animación de carga simulada
        formStatus.innerHTML = 'Enviando...';
        formStatus.className = 'form-status';
        
        setTimeout(() => {
            formStatus.innerHTML = '¡Mensaje enviado con éxito! Me pondré en contacto pronto.';
            formStatus.className = 'form-status success';
            contactForm.reset();
            
            // Limpiar mensaje después de 5 segundos
            setTimeout(() => {
                formStatus.innerHTML = '';
            }, 5000);
        }, 1500);
    });
}

// Mobile Menu Toggle
const mobileNavToggle = document.getElementById('mobileNavToggle');
const navLinks = document.getElementById('navLinks');

if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', () => {
        mobileNavToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Evitar scroll en el body cuando el menú está abierto
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNavToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});
