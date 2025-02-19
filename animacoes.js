// document.addEventListener('DOMContentLoaded', () => {
//     const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px'
//     };

//     const animateOnScroll = (entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//         entry.target.classList.add('animate');
//         observer.unobserve(entry.target);
//         }
//     });
//     };

//     const observer = new IntersectionObserver(animateOnScroll, observerOptions);

//     // Animar elementos ao scroll
//     document.querySelectorAll('[data-animate]').forEach(el => {
//     const animationType = el.dataset.animate;
//     el.style.animation = `${animationType} 0.6s ease forwards`;
//     observer.observe(el);
//     });

//     // Parallax with varying speeds
//     window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const parallaxElements = document.querySelectorAll('[data-parallax]');
    
//     parallaxElements.forEach(element => {
//         const speed = parseFloat(element.dataset.parallax) || 0.5;
//         const offset = scrolled * speed;
//         element.style.backgroundPositionY = `${offset}px`;
        
//         // Add horizontal movement for some elements
//         if(element.dataset.parallaxDirection === 'horizontal') {
//         element.style.backgroundPositionX = `${offset}px`;
//         }
//     });
//     });

//     // Hover dinâmico nos cards
//     document.querySelectorAll('.servico-card').forEach(card => {
//     card.addEventListener('mousemove', (e) => {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
        
//         card.style.setProperty('--mouse-x', `${x}px`);
//         card.style.setProperty('--mouse-y', `${y}px`);
//     });
//     });

//     // Footer WhatsApp button behavior
//     const whatsappBtn = document.querySelector('.whatsapp-btn');
//     const footer = document.querySelector('.footer');

//     const footerObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//         whatsappBtn.style.opacity = '0';
//         whatsappBtn.style.pointerEvents = 'none';
//         } else {
//         whatsappBtn.style.opacity = '1';
//         whatsappBtn.style.pointerEvents = 'all';
//         }
//     });
//     }, {
//     rootMargin: '0px 0px -50px 0px',
//     threshold: 0.1
//     });

//     footerObserver.observe(footer);
// });