// Фото человека - открывает его профиль
const profile = document.querySelector('.aside-container');
const openProfileBtn = document.querySelector('.chat-header__left');

openProfileBtn.addEventListener('click', () => {
    profile.classList.remove('hide');
});

// Крестик - закрывает чат, возврат на карточки персон
const chat = document.querySelector('.chat-container');
const personCard = document.querySelector('.other-persons');
const closeChatBtn = chat.querySelector('.close-btn');

closeChatBtn.addEventListener('click', () => {
    chat.classList.add('hide');
    personCard.classList.remove('hide');
});


const messageContainer = document.querySelector('.personal-info');
const messagesLinks = messageContainer.querySelectorAll('.message-aside');

let activeChat;

messageContainer.addEventListener('click', (event) => {
    const target = event.target.closest('.message-aside');
    console.log(target);

    let hasActiveChat = false;

    // Меняем выделение по клику
    messagesLinks.forEach((elem) => {
        if (elem == target) {
            elem.classList.add('active');
            activeChat = elem;
        } else {
            elem.classList.remove('active');
        }

        if (elem.classList.contains('active')) {
            hasActiveChat = true;
        }
    });
    console.log(hasActiveChat);

    // Показываем окно чатов
    if (hasActiveChat) {
        chat.classList.remove('hide');
        personCard.classList.add('hide');
    } else {
        chat.classList.add('hide');
        personCard.classList.remove('hide');
    }
});