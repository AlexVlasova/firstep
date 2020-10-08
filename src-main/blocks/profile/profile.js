// Крестик профиля
const profile = document.querySelector('.aside-container');
const closeProfileBtn = profile.querySelector('.close-btn');

closeProfileBtn.addEventListener('click', () => {
    profile.classList.add('hide');
});

const options = {
    horizontal: false,
    scrollBy: 100
}

const frame = ".profile-container";

const sly = new Sly(frame, options);
sly.init();