const modalFilters = document.querySelector('.filters-modal__container');

// Переключаем кнопки предпочтений
const switcherFilters = modalFilters.querySelectorAll('.switcher');
const switcherBtnsFirst = modalFilters.querySelectorAll('.display-for-me .switcher__item');
const switcherBtnsSecond = modalFilters.querySelectorAll('.display-me-to-other .switcher__item');

function hideElement (tag) {
    const elem = document.querySelector(tag);
    elem.classList.add('hide');
}

function showElement (tag) {
    const elem = document.querySelector(tag);
    elem.classList.remove('hide');
}

// Обрабатываем клик по копкам Показывать мне
switcherFilters[0].addEventListener('click', (event) => {
	if ( !(event.target.classList.contains('switcher')) ) {
		const target = event.target.closest('.switcher__item');

		// Переключаем выделение на кнопках
		switcherBtnsFirst.forEach( (elem, i) => {
			if (elem.classList.contains('switch-checked')) {
				if (elem != target) {
					elem.classList.remove('switch-checked');
				}
			} else {
				if (elem == target) {
					elem.classList.add('switch-checked');
				}
			}
		});
	}
});

// Обрабатываем клик по копкам Показывать меня в поиске
switcherFilters[1].addEventListener('click', (event) => {
	if ( !(event.target.classList.contains('switcher')) ) {
		const target = event.target.closest('.switcher__item');

		// Переключаем выделение на кнопках
		switcherBtnsSecond.forEach( (elem, i) => {
			if (elem.classList.contains('switch-checked')) {
				if (elem != target) {
					elem.classList.remove('switch-checked');
				}
			} else {
				if (elem == target) {
					elem.classList.add('switch-checked');
				}
			}
		});
	}
});

// Обрабатываем диапазоны range slider
// Возраст
const age = document.querySelector('.age');
const ageInputLeft = age.querySelector("#input-left");
const ageInputRight = age.querySelector("#input-right");

const ageThumbLeft = age.querySelector(".slider > .thumb.left");
const ageThumbRight = age.querySelector(".slider > .thumb.right");
const ageRange = age.querySelector(".slider > .range");

const ageNumbers = age.querySelector('.numbers');
const ageNumbersLeft = ageNumbers.querySelector('.left');
const ageNumbersRight = ageNumbers.querySelector('.right');

function setMultyLeftValue() {
	// Сохранили значения, которые сейчас принял слайдер
	const target = ageInputLeft,
		min = parseInt(target.min),
		max = parseInt(target.max);

	// Важно, чтобы левый был меньше правого по значению
	target.value = Math.min(parseInt(target.value), parseInt(ageInputRight.value) - 6);

	const percent = ((target.value - min) / (max - min)) * 100;

	// Меняем значение в окне возраста
	ageNumbersLeft.textContent = target.value;

	ageThumbLeft.style.left = percent + "%";
	ageRange.style.left = percent + "%";
}
setMultyLeftValue();

function setMultyRightValue() {
	const target = ageInputRight,
		min = parseInt(target.min),
		max = parseInt(target.max);

	// Правый точно больше левого
	target.value = Math.max(parseInt(target.value), parseInt(ageInputLeft.value) + 6);

	const percent = ((target.value - min) / (max - min)) * 100;

    // Меняем значение в окне возраста
    if (target.value != 90) {
        ageNumbersRight.textContent = target.value;
    } else {
        ageNumbersRight.textContent = ""+ target.value + "+";
    }
	

	ageThumbRight.style.right = (100 - percent) + "%";
	ageRange.style.right = (100 - percent) + "%";
}
setMultyRightValue();

// Обработать значения при изменении
ageInputLeft.addEventListener("input", setMultyLeftValue);
ageInputRight.addEventListener("input", setMultyRightValue);


// Обрабатываем диапазоны range slider
// Расстояние
const dist = document.querySelector('.distance');
const distInput = dist.querySelector("#input");

const distThumb = dist.querySelector(".slider > .thumb");
const distRange = dist.querySelector(".slider > .range");

const distNumber = dist.querySelector('.left');
const distNumbersLeft = distNumber.querySelector('.left');

function setValue() {
	// Сохранили значения, которые сейчас принял слайдер
	const target = distInput,
		min = parseInt(target.min),
		max = parseInt(target.max);

	// Важно, чтобы не вышло за 0
	target.value = Math.max(parseInt(target.value), 8);

	const percent = ((target.value - min) / (max - min)) * 100;

    // Меняем значение в окне расстояния
    if (target.value != 100) {
        distNumber.textContent = target.value;
    } else {
        distNumber.textContent = "" + target.value + "+";
    }

	distThumb.style.right = (100 - percent) + "%";
	distRange.style.right = (100 - percent) + "%";
}
setValue();

// Обработать значения при изменении
distInput.addEventListener("input", setValue);