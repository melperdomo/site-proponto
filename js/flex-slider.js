
if (typeof FlexSliderWC === 'undefined')
{
    class FlexSliderWC extends HTMLElement
    {
        constructor()
        {
            super();
            this.quizScrollStartX = 0;
            this.quizScrollStartY = 0;
        }

        connectedCallback()
        {
            document.addEventListener("DOMContentLoaded", () => this.init());
        }

        init()
        {
            
            const btnBack = document.createElement("f-btn-back");
            btnBack.innerHTML = "&lsaquo;";
            btnBack.addEventListener("click", () => this.back());

            const btnNext = document.createElement("f-btn-next");
            btnNext.innerHTML = "&rsaquo;";
            btnNext.addEventListener("click", () => this.next());

            const scroller = document.createElement("f-scroller");
            scroller.replaceChildren(...this.childNodes);

            scroller.addEventListener('wheel', (e) => this.preventWheelScrollX(e), { passive: false });
            scroller.addEventListener('touchstart', (e) => this.touchStartScrollX(e), { passive: false });
            scroller.addEventListener('touchmove', (e) => this.preventTouchScrollX(e), { passive: false });

            this.appendChild(btnBack);
            this.appendChild(scroller);
            this.appendChild(btnNext);
        }

        back()
        {
            this.move('left');
        }
        
        next()
        {
            this.move('right');
        }
        
        move(direction)
        {
            let qsBtn = (direction == 'left') ? "f-btn-back" : "f-btn-next";

            const btn = this.querySelector(qsBtn);
            const slider = btn.parentElement;
            const scroller = slider.querySelector("f-scroller");
            const scrollValue = (direction == 'left') ? -(scroller.clientWidth) : scroller.clientWidth;
        
            scroller.scrollBy({
                left: scrollValue,
                behavior: 'smooth'
            });
        
            btn.style.pointerEvents = "none";
            setTimeout(() => {
                btn.style.pointerEvents = "all";
            }, 500);
        }
        
        touchStartScrollX(e) {
            this.quizScrollStartX = e.touches[0].clientX;
            this.quizScrollStartY = e.touches[0].clientY;
        }
        
        preventTouchScrollX (e) {
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            const deltaX = currentX - this.quizScrollStartX;
            const deltaY = currentY - this.quizScrollStartY;
        
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                e.preventDefault();
            }
        }
        
        preventWheelScrollX (e) {
            if(e.deltaX !== 0) {
                e.preventDefault();
            }
        }
    }

    customElements.define('flex-slider', FlexSliderWC);
}
