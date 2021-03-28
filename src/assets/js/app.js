'use strict';

(function () {

    let isScrolling = false;
    window.addEventListener('scroll', function () {
        if (!isScrolling) {
            window.requestAnimationFrame(function () {
               scrolling();
               isScrolling = false;
            });
        }
        isScrolling = true;
    }, false);

    document.addEventListener("DOMContentLoaded", scrolling, false);
    const skills = document.querySelectorAll('.skills__item');

    function scrolling() {
        skills.forEach((el) => {
            if (isFullyVisible(el)) {
                let widthSkill;
                el.style.opacity = "1";
                let skillValue = el.querySelector('.skill__value').innerText;
                const index = skillValue.indexOf('%');

                widthSkill = skillValue.slice(0, index);
                el.style.width = `${widthSkill}rem`;
                el.classList.add('active');
            } else {
                el.style.opacity = "0";
                el.style.width = "5.5rem";
                el.style.height = "5.5rem";
                el.classList.remove('active');
            }
        });
    }

    function isFullyVisible(el) {
        const elementBoundary = el.getBoundingClientRect();

        let top = elementBoundary.top;
        let bottom = elementBoundary.bottom;

        return ((top >= 0) && (bottom <= window.innerHeight));
    }

}());
