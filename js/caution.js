document.addEventListener('DOMContentLoaded', function() {
    const stripe = document.querySelector('.hero-caution-stripe');
    if (stripe) {
    let segments = '';
    for (let i = 0; i < 20; i++) {
        segments += `<div class="hero-caution-segment" style="background-color: ${i % 2 === 0 ? 'var(--color-amarelo)' : 'var(--color-preto)'}"></div>`;
    }
    stripe.innerHTML = segments;
    }
});
