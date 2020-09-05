var firebaseConfig = {
    apiKey: "AIzaSyAp576XhrGyF7VIkbUZDn9Bj88DWobYx4w",
    authDomain: "firstep-auth.firebaseapp.com",
    databaseURL: "https://firstep-auth.firebaseio.com",
    projectId: "firstep-auth",
    storageBucket: "firstep-auth.appspot.com",
    messagingSenderId: "555707846412",
    appId: "1:555707846412:web:2c7b393eb422fdaa460329",
    measurementId: "G-HSJCQJG1YR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

console.log('start');
// Настраиваем капчу
firebase.auth().useDeviceLanguage();
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container");

// Необходимые поля
const phoneInput = document.querySelector('input[name="phone"]');
const codeInput = document.querySelector('input[name="code"]');
const phoneBtn = document.querySelector('.phone-btn');
const codeBtn = document.querySelector('.code-btn');
console.log(codeBtn);

phoneBtn.addEventListener('click', () => {
    console.log('phone btn clicked');

    let phoneNumber = phoneInput.value;
    console.log(phoneNumber);

    phoneNumber = '+79998888080';

    const appVerifier = window.recaptchaVerifier;
    console.log(appVerifier);
    
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
});

let token = '';

codeBtn.addEventListener('click', () => {
    console.log('Code btn clicked');
    // Return a user object if the authentication was successful, and auth is complete
    let code = codeInput.value;
    console.log(code);
    code = '111111';

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
});
        
        
