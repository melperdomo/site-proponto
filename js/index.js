function openMenu() {
    let menu = document.querySelector(".header-right");
    menu.classList.toggle("hide");
}

function openCase(flex_case) {
    const f_case = document.querySelector(flex_case);
    const shadow_bg = document.querySelector(".shadow-bg");
    shadow_bg.classList.remove('hidden');
    f_case.classList.remove('none');
}

function closeCase() {
    const shadow_bg = document.querySelector(".shadow-bg");
    shadow_bg.classList.add('hidden');
    for (let f_slider of shadow_bg.querySelectorAll('flex-slider')) {
        f_slider.classList.add('none');
    }
}