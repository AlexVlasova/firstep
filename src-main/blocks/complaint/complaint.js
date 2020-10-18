const complaint = document.querySelector('.complaint');
const complaintTextarea = complaint.querySelector('textarea');
const complaintSendBtn = complaint.querySelector('.send-complaint');
const complaintCloseBtn = complaint.querySelector('.close-btn');
const checkboxContainer = complaint.querySelector('.checkboxes');
const complaintCheckboxes = checkboxContainer.querySelectorAll('.checkbox');
const openModalBtn = document.querySelector('.person-card .btn-flag');

let lastCheckbox = complaintCheckboxes.length - 1;

// Открытие окна на жалобы
openModalBtn.addEventListener('click', () => {
    complaint.classList.remove('hide');
    // Сбрасываем данные модального окна
    checkboxContainer.classList.remove('hide');
    complaintTextarea.classList.add('hide');
    complaintTextarea.value = "";
    complaintCheckboxes.forEach((elem) => {
        let target = elem.querySelector('input');
        target.checked = false;
    });
})

// Закрытие модального окна
function closeModal() {
    complaint.classList.add('hide');
}
complaintCloseBtn.addEventListener('click', closeModal);

complaint.addEventListener('click', (e) => {
    if (e.target === complaint) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && !complaint.classList.contains('hide')) { 
        closeModal();
    }
});

// Активация кнопки отправить, когда выделена хоть одна жалоба
checkboxContainer.addEventListener('click', () => {
    let complChecked = false;
    complaintCheckboxes.forEach( (elem) => {
        let target = elem.querySelector('input');
        if (target.checked) {
            complChecked = true;
            return;
        }
    });
    
    if (complChecked) {
        complaintSendBtn.disabled = false;
    } else {
        complaintSendBtn.disabled = true;
    }
});

// Реакция на кнопки
const textBtnOther = "Продолжить";
const textBtnSend = "Отправить";
complaintCheckboxes[lastCheckbox].addEventListener('change', () => {
    const btnText = complaintSendBtn.textContent;
    
    if (btnText === textBtnOther) {
        complaintSendBtn.textContent = textBtnSend;
    }
    else {
        complaintSendBtn.textContent = textBtnOther;
    }
});

const modalComplaintDone = document.querySelector('.person-card__invite-done');
const buttons = document.querySelector('.person-card__nav');

// Переходим на жалобу "другое"
complaintSendBtn.addEventListener('click', () => {
    // Переходим на другую жалобу
    if (complaintSendBtn.textContent === textBtnOther) {
        // Спрятиали ненужные окна
        checkboxContainer.classList.add('hide');
        complaintTextarea.classList.remove('hide');
        complaintTextarea.focus();
        // Поменяли кнопку
        complaintSendBtn.textContent = textBtnSend;
        complaintSendBtn.disabled = true;
    } else {
        closeModal();   
        // Показываем окно Ваша жалоба отпавлена
        const textComplaintDone = "Вы отправили жалобу на пользователя";
        const textInvited = "Ваше приглашение отправлено";
        const modalMessage = modalComplaintDone.querySelector('p');
        modalMessage.textContent = textComplaintDone;
        console.log(modalComplaintDone);

        buttons.classList.add('hide');
        modalComplaintDone.classList.remove('hide');
        setTimeout(() => {
            buttons.classList.remove('hide');
            modalComplaintDone.classList.add('hide');
            // Возвращаем надпись о приглашении
            modalMessage.textContent = textInvited;
        }, 2000);        
    }
});

// Разблокируем кнопку при вводе текста
complaintTextarea.addEventListener('input', () => {
    const value = complaintTextarea.value;
    if (value !== "") {
        complaintSendBtn.disabled = false;
    } else {
        complaintSendBtn.disabled = true;
    }
});

// Скроллинг при длинной жалобе