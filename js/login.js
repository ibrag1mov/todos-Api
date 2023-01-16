const elRegisterBtn = document.querySelector('.js-register');
const elPasswordInput = document.querySelector('.js-password');
const elEmailInput = document.querySelector('.js-email');
const elForm = document.querySelector('.form');



elRegisterBtn.addEventListener('click', (evt) => {
    location.replace('Register.html');
})


elForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    fetch('https://reqres.in/api/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                email: elEmailInput.value,
                password: elPasswordInput.value,
            }
        )
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.token){
            localStorage.setItem('token', data.token);
            location.replace('index.html');
        }
        else{
            elEmailInput.classList.add('input-error');
            elEmailInput.value=''
            elPasswordInput.value=''
            alert('User topilmadi')
        }
    }
    )
    .catch((err)=>console.log(err));
})  

elEmailInput.addEventListener('input', (evt)=>{
    elEmailInput.classList.remove('input-error');
})
