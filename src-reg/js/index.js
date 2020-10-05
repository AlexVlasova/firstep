const phoneBtn = document.querySelector('.phone-btn');
const fbBtn = document.querySelector('.fb-btn');
const phoneElements = document.querySelectorAll('.phone');

phoneBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('phone clicked');

    phoneBtn.classList.add('hide');
    fbBtn.classList.add('hide');

    phoneElements.forEach((elem) => {
        elem.classList.remove('hide');
    });
});

fbBtn.addEventListener('click', (event) => {
    event.preventDefault();

    phoneBtn.classList.add('hide');
    fbBtn.classList.add('hide');

    console.log('fb Clicked');
});