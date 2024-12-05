function openMenu() {
    let menu = document.querySelector(".header-right");
    menu.classList.toggle("hide");
}

const yellowDashElements = document.querySelectorAll('.yellow-dash');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Verifica se a animação já foi ativada
            if (!entry.target.classList.contains('animate')) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Remove do Observer após animar
            }
        }
    });
}, {
    threshold: 0.5 // 50% do elemento visível
});

// Observa cada elemento
yellowDashElements.forEach(element => observer.observe(element));
