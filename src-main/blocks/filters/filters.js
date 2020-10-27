const filter = document.querySelector('.filters');
const modalFilters = document.querySelector('.filters-modal');
const grayImg = filter.querySelector('.gray-icon');
const pinkImg = filter.querySelector('.pink-icon');
const filterText = filter.querySelector('.filters__text');
const closeFiltersBtn = modalFilters.querySelector('.btn-close-gray');

// Открываем окно
filter.addEventListener('click', () => {
      
    grayImg.classList.add('hide');
    pinkImg.classList.remove('hide');
	filterText.classList.add('active');
	modalFilters.classList.remove('hide');
});


// Закрытие модального окна
function closeModal() {
	modalFilters.classList.add('hide');
	grayImg.classList.remove('hide');
    pinkImg.classList.add('hide');
	filterText.classList.remove('active');
}
closeFiltersBtn.addEventListener('click', closeModal);

modalFilters.addEventListener('click', (e) => {
    if (e.target === modalFilters) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && !modalFilters.classList.contains('hide')) { 
        closeModal();
    }
});