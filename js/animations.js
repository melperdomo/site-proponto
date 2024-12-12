const animatableElements = document.querySelectorAll('.yellow-dash, *[data-animation]');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona a classe 'animate' quando o elemento entra na viewport
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Para de observar após animar
        }
    });
}, {
    threshold: 0.4 // Ativa quando 40% do elemento está visível
});

animatableElements.forEach(element => observer.observe(element));