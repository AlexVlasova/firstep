const btnMale = document.querySelector('.male');
const btnFemale = document.querySelector('.female');
const genderMessage = document.querySelector('.gender-message .message');

function hideGenderBtns() {
    btnFemale.classList.add('hide');
    btnMale.classList.add('hide');
}

btnMale.addEventListener('click', () => {
    genderMessage.textContent = "Мужчина";

    //Убираем ненужные кнопки
    hideGenderBtns();
});

btnFemale.addEventListener('click', () => {
    genderMessage.textContent = "Женщина";

    hideGenderBtns();
});