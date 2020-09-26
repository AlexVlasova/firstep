// Слайдер, у которого будем анализировать движение мыши
const photoSlider = document.querySelector('.photo-slider');
// Массив всех фотографий
const photoSliderPhotos = photoSlider.querySelectorAll('.frame .items li');
// Состояния курсора
const cursorImage = {
    'top': '/assets/img/cursor-top.svg',
    'no': '/assets/img/cursor-no.svg',
    'bottom': '/assets/img/cursor-bottom.svg'
};
let position;
// Меняем внешний вид курсора
function setNewCursor(type) {
    photoSliderPhotos.forEach(elem => {
        elem.style.cursor = `url(${cursorImage[type]}), auto`;
    });
}
// Выясняем положение курсора
function findCoordinates (event) {
    return event.clientY;
}

let positionClientY = 0;
photoSlider.addEventListener('mousemove', (event) => {
    positionClientY = findCoordinates(event);
});

let cursorRepeat;
let cursorTarget;
// Как только курсор заходит на слайдер, начинает выполняться функция анализа курсора
photoSlider.addEventListener('mouseover', (event) => {
    cursorTarget = event.target.closest('li');
    cursorRepeat = setTimeout(chooseCursor, 100);
    // cursorRepeat = setInterval(chooseCursor, 100);
});

// Как только курсор уходит с элемента, устанавливаем дефолтные значения ? и останавливаем повторение
photoSlider.addEventListener('mouseout', () => {
    clearInterval(cursorRepeat);
});

// const photoContainer = document.querySelector('.person-card__photo');

// На вход подается положение курсора, само событие
function chooseCursor () {
    // Когда все одно и то же, функция ничего не делает, поэтому некорректно работает
    // console.log(); - не работает нормально без этого
    // Переменная, отвечающая за вид курсора сейчас
    console.log();
    let positionNew = 'top';
    // Определяем положение верха слайдера
    const sliderTopCoord = photoSlider.getBoundingClientRect().y;
    const sliderCenter = photoSlider.getBoundingClientRect().height / 2 - 20;
    // Выясняем положение курсора внутри слайдера
    const cursorPosition = positionClientY - sliderTopCoord;
    
    if (cursorPosition < sliderCenter) {
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
        setNewCursor(position);
    }
    cursorRepeat = setTimeout(chooseCursor, 100);
}