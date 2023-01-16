const elLoginBtn = document.querySelector('.js-login');
const elRegisterBtn = document.querySelector('.js-register');
const elLoginForm = document.querySelector('.js-login-form');
const elLogOutBtn = document.querySelector('.js-log-out');
const elMainContent = document.querySelector('.main-content')

const localData = localStorage.getItem('token');
if(localData){
    elLoginForm.classList.add('d-none');
    elLogOutBtn.classList.remove('d-none')
    elMainContent.classList.remove('d-none')
}
// if(!localData){
//     location.replace('login.html');
// }

elLogOutBtn.addEventListener('click', (evt)=>{
    elLogOutBtn.classList.add('d-none')
    elLoginForm.classList.remove('d-none');
    elMainContent.classList.add('d-none')
    window.localStorage.clear();
})


elLoginBtn.addEventListener('click', (evt)=>{
    location.replace('login.html');
})
elRegisterBtn.addEventListener('click', (evt)=>{
    location.replace('Register.html');
})