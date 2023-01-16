
const elLoginBtn = document.querySelector('.js-login');
const elNameInput = document.querySelector('.js-name');
const elPhoneInput = document.querySelector('.js-phone');
const elEmailInput = document.querySelector('.js-email');
const elPasswordInput = document.querySelector('.js-password');
const elForm = document.querySelector('.form');
const elSubmitBtn = document.querySelector('.js-register');



elLoginBtn.addEventListener('click', (evt)=>{
    location.replace('login.html');
})

elForm.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    
    fetch('http://10.10.2.17:5000/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( {
            user_name: elNameInput.value,
            phone: elPhoneInput.value,
            email: elEmailInput.value,
            password: elPasswordInput.value,
        })
    }).then((res)=>res.json())
    .then((data)=>{
     console.log(data);
    })
    .catch((err)=>console.log(err))
})