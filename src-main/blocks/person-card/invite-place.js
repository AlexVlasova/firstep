const placeBtns = document.querySelector('.person-card__btns');
const places = placeBtns.querySelectorAll('.place-btn');
const inviteBtn = document.querySelector('.nav-invite');
const buttons = document.querySelector('.person-card__nav');
const inviteDone = document.querySelector('.person-card__invite-done');

let activePlace;

placeBtns.addEventListener('click', (event) => {
    const target = event.target;
    let hasInvitePlace = false;

    // Меняем выделение по клику
    places.forEach((elem) => {
        if (elem == target) {
            elem.classList.add('checked');
            activePlace = elem;
        } else {
            elem.classList.remove('checked');
        }

        if (elem.classList.contains('checked')) {
            hasInvitePlace = true;
        }
    });

    // Активируем кнопку
    if (hasInvitePlace) {
        inviteBtn.disabled = false;
    } else {
        inviteBtn.disabled = true;
    }
});

inviteBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(`Invited in ${activePlace.textContent}`);
    activePlace.classList.remove('checked');
    activePlace = '';

    // Показываем окошко о приглашении
    buttons.classList.add('hide');
    inviteDone.classList.remove('hide');
    setTimeout(() => {
        buttons.classList.remove('hide');
        inviteDone.classList.add('hide');
    }, 2000);

    inviteBtn.disabled = true;
});