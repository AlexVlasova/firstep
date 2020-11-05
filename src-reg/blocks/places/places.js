const placesInput1 = document.querySelector('.p1');
const placesInput2 = document.querySelector('.p2');
const placesInput3 = document.querySelector('.p3');
const selectList = document.querySelectorAll('.places__list');
const btnOpen = document.querySelectorAll('.places__open');
const btnClear = document.querySelectorAll('.places__clear');
const placesInputText = document.querySelectorAll('.places-input');

const messages = document.querySelectorAll('.places-rezult');

// Фокус в элемент
placesInputText[0].focus();
placesInput2.classList.add('hide');
placesInput3.classList.add('hide');

// Открываем при клике по стрелочке (показываем все варианты)
btnOpen.forEach(elem => {
    elem.addEventListener('click', (event) => {
        const target = event.target.closest('.places');
        const list = target.querySelector('.places__list');
        list.classList.remove('hide');
    });
});

btnClear.forEach(elem => {
    elem.addEventListener('click', (event) => {
        const target = event.target.closest('.places');
        const input = target.querySelector('.places-input');
        input.value = "";
        input.focus();
    });
});

// открываем окно как только вводим текст
placesInputText.forEach(elem => {
    elem.addEventListener('input', (event) => {
        const input = event.target;
        let value = input.value;

        const place = input.closest('.places');
        const bOpen = place.querySelector('.places__open');
        const bClear = place.querySelector('.places__clear');
        const list = place.querySelector('.places__list');
    
        if (value != "") {
            list.classList.remove('hide');
            bOpen.classList.add('hide');
            bClear.classList.remove('hide');
        } else {
            list.classList.add('hide');
            bOpen.classList.remove('hide');
            bClear.classList.add('hide');
        }
    });
});

//Выбираем заведение
selectList.forEach(elem => {
    elem.addEventListener('click', (event) => {
        const target = event.target.closest('li');

        const place = target.closest('.places');
        const input = place.querySelector('.places-input');
        const bOpen = place.querySelector('.places__open');
        const bClear = place.querySelector('.places__clear');
        const list = place.querySelector('.places__list');
    
        if (target) {
            // сохранили выбранное заведение
            input.value = target.textContent;
    
            list.classList.add('hide');
            bOpen.classList.remove('hide');
            bClear.classList.add('hide');

            // Показываем следующий инпут
            if (place == placesInput1) {
                messages[0].textContent = input.value;
                placesInput2.classList.remove('hide');
            } else if (place == placesInput2) {
                messages[1].textContent = input.value;
                placesInput3.classList.remove('hide');
            } else {
                messages[2].textContent = input.value;
            }
        }
    });
});