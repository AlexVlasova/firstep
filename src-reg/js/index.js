const phoneBtn = document.querySelector('.phone-btn');
const fbBtn = document.querySelector('.fb-btn');
const phoneElements = document.querySelectorAll('.phone');

phoneBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('phone clicked');

    phoneBtn.classList.add('hide');
    fbBtn.classList.add('hide');

    phoneElements.forEach((elem) => {
        // Сделать через remove hide (сначала добавить сам класс)
        elem.classList.remove('hide');
    });
});

fbBtn.addEventListener('click', (event) => {
    event.preventDefault();

    phoneBtn.classList.add('hide');
    fbBtn.classList.add('hide');

    console.log('fb Clicked');
});

// const phoneInput = document.querySelector("#demo");
// window.intlTelInput(phoneInput, {
//     // any initialisation options go here
// });
