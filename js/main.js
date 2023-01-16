const elLoginBtn = document.querySelector('.js-login');
const elRegisterBtn = document.querySelector('.js-register');


elLoginBtn.addEventListener('click', (evt)=>{
    location.replace('login.html');
})
elRegisterBtn.addEventListener('click', (evt)=>{
    location.replace('Register.html');
})