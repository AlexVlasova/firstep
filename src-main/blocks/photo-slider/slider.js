const options = {
    horizontal: false,
    itemNav: 'basic',
    smart: 1,
    scrollBy: 1,
    pagesBar: '.pages'
};
const frame = ".frame";

const sly = new Sly(frame, options);
sly.init();

// Курсор
// Следование за мышью
(function () {
'use strict';

const boxElem = document.querySelector('.photo-slider');
const pointerElem = boxElem.querySelector('.cursor');
// Массив всех фотографий
const photoSliderPhotos = boxElem.querySelectorAll('.frame .items li');
// Состояния курсора
const cursorImage = {
    'top': '/assets/img/cursor-top.svg',
    'no': '/assets/img/cursor-no.svg',
    'bottom': '/assets/img/cursor-bottom.svg'
};
let position = 'no';

function onMouseMove(event) {
    // На какой фотке находится слайдер
    let cursorTarget;
    let positionNew;
    let mouseX = event.pageX;
    let mouseY = event.pageY;
    let crd = boxElem.getBoundingClientRect();
    let y;

    // Находится ли курсор в слайдере
    let activePointer = crd.left+13 <= mouseX && mouseX <= crd.right-13 && crd.top+13 <= mouseY && mouseY <= crd.bottom-140;

    requestAnimationFrame(function movePointer() {
        if (activePointer) {
            pointerElem.classList.remove('hide');
            pointerElem.style.left = Math.floor(mouseX-crd.x-23) + 'px';
            y = mouseY-crd.y-23;
            pointerElem.style.top = Math.floor(y) + 'px';

            cursorTarget = event.target.closest('li');
            const sliderCenter = crd.height / 2 - 20;
            if (y < sliderCenter) {
                positionNew = 'top';
            } else {
                positionNew = 'bottom';
            }
            // Проверка на крайние слайды
            if (positionNew == 'top' && cursorTarget == photoSliderPhotos[0]) {
                positionNew = 'no';
            }
            if (positionNew == 'bottom' && cursorTarget == photoSliderPhotos[photoSliderPhotos.length - 1]) {
                positionNew = 'no';
            }

            // Устанавливаем новый курсор, если он не совпадает
            if (position !== positionNew) {
                position = positionNew;
                console.log(position);
                setNewCursor(position);
            }
        } else {
            pointerElem.classList.add('hide');
        }
    });
}

function setNewCursor(type) {
    pointerElem.src = `${cursorImage[type]}`;
}

function disablePointer() {
    requestAnimationFrame(function hidePointer() {
        pointerElem.classList.add('hide');
    });
}

boxElem.addEventListener('mousemove', onMouseMove, false);
boxElem.addEventListener('mouseleave', disablePointer, false);

})();