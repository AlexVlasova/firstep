const filter = document.querySelector('.filters');
const grayImg = filter.querySelector('.gray-icon');
const pinkImg = filter.querySelector('.pink-icon');
const filterText = filter.querySelector('.filters__text');

// Открываем окно
filter.addEventListener('click', () => {
    console.log('clicked');
    
    grayImg.classList.add('hide');
    pinkImg.classList.remove('hide');
    filterText.classList.add('active');
});