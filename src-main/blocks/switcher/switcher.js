const switcher = document.querySelector('.personal-info .switcher');
const switcherBtns = switcher.querySelectorAll('.switcher__item');

function hideElement (tag) {
    const elem = document.querySelector(tag);
    elem.classList.add('hide');
}

function showElement (tag) {
    const elem = document.querySelector(tag);
    elem.classList.remove('hide');
}

switcher.addEventListener('click', (event) => {
    if ( !(event.target.classList.contains('switcher')) ) {
        const target = event.target.closest('.switcher__item');

        // Переключаем выделение на кнопках
        switcherBtns.forEach( (elem, i) => {
            if (elem.classList.contains('switch-checked')) {
                if (elem != target) {
                    elem.classList.remove('switch-checked');

                    // Меняем содержание
                    if (i === 0) {
                        hideElement('.messages');
                    } else {
                        hideElement('.invites');
                    }
                }
            } else {
                if (elem == target) {
                    elem.classList.add('switch-checked');

                    // Меняем содержание
                    if (i === 0) {
                        showElement('.messages');
                    } else {
                        showElement('.invites');
                    }
                }
            }
        });
    }
});