import config from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    // Form submission handler
    const contactForms = document.querySelectorAll('#contact form');
    contactForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Construct WhatsApp message
            const whatsappMessage = `Olá! Meu nome é ${name}. Email: ${email}. Mensagem: ${message}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // Redirect to WhatsApp
            window.open(`https://wa.me/${config.contactPhone}?text=${encodedMessage}`, '_blank');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Breadcrumbs Highlighting
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('#dynamic-header nav ul li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop() || 
            (currentPath.includes(link.getAttribute('href')) && link.getAttribute('href') !== 'index.html')) {
            link.classList.add('active-page');
        }
    });
});