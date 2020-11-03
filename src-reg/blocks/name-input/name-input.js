const nameInput = document.querySelector('.name-input');
const btnClear = nameInput.querySelector('.name-input__clear');
const inputTextName = nameInput.querySelector('input.name');

// Очищаем весь ввод по кнопке 
btnClear.addEventListener('click', () => {
    inputTextName.value = "";
    inputTextName.focus();
    btnClear.classList.add('hide');
});

// Убираем возможность очистки если нет символов
inputTextName.addEventListener('input', () => {
    let value = inputTextName.value;
    if (value == "") {
        btnClear.classList.add('hide');
    } else {
        if (btnClear.classList.contains('hide')) {
            btnClear.classList.remove('hide');
        }
    }
});

const btnNameNext = document.querySelector('.send-name');
const nameMessage = document.querySelector('.name-message .message');
const welcomeMessage = document.querySelector('.welcome-message .message');

// Сохраняем введенное имя
btnNameNext.addEventListener('click', () => {
    let value = inputTextName.value;
    nameMessage.textContent = value;

    const welcomeText = `Приятно познакомиться, ${value}. Теперь выбери свой пол`;
    welcomeMessage.textContent = welcomeText;

    inputTextName.value = "";
    btnClear.classList.add('hide');
});