var firebaseConfig = {
    apiKey: "AIzaSyDMnXgRUGrSmS3hSi78jGuxVrZaI9b6Xg8",
    authDomain: "firstep-ad5d3.firebaseapp.com",
    databaseURL: "https://firstep-ad5d3.firebaseio.com",
    projectId: "firstep-ad5d3",
    storageBucket: "firstep-ad5d3.appspot.com",
    messagingSenderId: "1071836711242",
    appId: "1:1071836711242:web:4623dbdb17e9500e1859b3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// Настраиваем капчу
firebase.auth().useDeviceLanguage();
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('confirm-phone', {
    'size': 'invisible',
    'callback': function(response) {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
    }
});  

// Необходимые поля
const phone = document.querySelector('.phone-input');
const phoneInput = phone.querySelector('.iti');
const codeContainer = document.querySelector('.code-input');
const codeInput = codeContainer.querySelectorAll('.code-input__number');
const phoneBtn = document.querySelector('.confirm-phone');
const confirmElements = document.querySelectorAll('.confirm');
const personElements = document.querySelectorAll('.person-info');

phoneBtn.addEventListener('click', () => {
    const phoneCode = phoneInput.querySelector('.iti__selected-dial-code'); 
    const phonePart = phoneInput.querySelector('.phone-input');
    console.log(phoneCode.textContent);
    console.log(phonePart.value);

    let phoneNumber = phoneCode.textContent + phonePart.value;
    console.log(phoneNumber);

    // phoneNumber = '+79998888080';

    const appVerifier = window.recaptchaVerifier;
    
    firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
            console.log('SMS sent');
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
        })
        .catch(function (error) {
            console.log('Sms error');
            // Error; SMS not sent
            window.recaptchaVerifier.render()
                .then(function(widgetId) {
                    grecaptcha.reset(widgetId);
                });              
        });


        phoneInput.classList.add('hide');
        phoneBtn.classList.add('hide');
        confirmElements[0].textContent = phoneNumber;
        confirmElements.forEach((elem) => {
            elem.classList.remove('hide');
        });
        codeInput[0].focus();
        codeContainer.classList.remove('hide');
});

let token = '';

codeInput[5].addEventListener('input', (event) => {
    // Return a user object if the authentication was successful, and auth is complete
    let code = "";
    codeInput.forEach((elem) => {
        code += elem.value;
    });
    personElements[0].textContent = code;

    confirmationResult
        .confirm(code)
        .then(function(result) {
            const user = result.user;
            console.log(user);

            token = user.refreshToken;
            console.log(token);
        })
        .catch(function(error) {
            console.log(error);
        });
    codeContainer.classList.add('hide');
    personElements.forEach((elem) => {
        elem.classList.remove('hide');
    });
});

const fbBtn = document.querySelector('.fb-btn');

let provider = new firebase.auth.FacebookAuthProvider();
// Можно настроить сразу брать данные о пользователе у Facebook

fbBtn.addEventListener('click', (event) => {
    firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            
            console.log(token);
            console.log(user);
        }).catch(function(error) {
            console.log(error.code);
            console.log(error.message);
        });
});

        
        
