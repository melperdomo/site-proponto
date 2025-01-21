function openMenu() {
    let menu = document.querySelector(".header-right");
    menu.classList.toggle("hide");
}

function openCase() {
    const shadow_bg = document.querySelector(".shadow-bg");
    shadow_bg.classList.remove('hidden');
}

function closeCase() {
    const shadow_bg = document.querySelector(".shadow-bg");
    shadow_bg.classList.add('hidden');
}