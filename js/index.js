function openMenu() {
    let menu = document.querySelector(".header-right");
    menu.classList.toggle("hide");
}

const yellowDashElements = document.querySelectorAll('.yellow-dash');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona a classe 'animate' quando o elemento entra na viewport
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Para de observar após animar
        }
    });
}, {
    threshold: 0.5 // Ativa quando 50% do elemento está visível
});

yellowDashElements.forEach(element => observer.observe(element));
