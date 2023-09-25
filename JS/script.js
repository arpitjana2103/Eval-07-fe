const APIURL = `http://127.0.0.1:5846/api/`;

////////////////////////////////////
////////////////////////////////////
// Login Signup Toggle
////////////////////////////////////
////////////////////////////////////

const loginToggle = document.querySelector('.toggle #loginBtn');
const signupToggle = document.querySelector('.toggle #signupBtn');

const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.singnup-form');

loginToggle.addEventListener('click', function () {
    loginForm.classList.remove('hide');
    signupForm.classList.add('hide');
});

signupToggle.addEventListener('click', function () {
    loginForm.classList.add('hide');
    signupForm.classList.remove('hide');
});

////////////////////////////////////
////////////////////////////////////
// Login User Signup User
////////////////////////////////////
////////////////////////////////////

signupForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const emailInp = signupForm.querySelector('.emailInp');
    const passInp = signupForm.querySelector('.PassInp');
    const passInp2 = signupForm.querySelector('.PassInp2');

    let payLoad = {
        email: emailInp.value,
        password: passInp.value,
        passwordConfirm: passInp2.value,
    };

    try {
        const response = await fetch(`${URL}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payLoad),
        });
        const data = await response.json();
        alert('Signup Successfull, Login to continue');
    } catch (error) {
        alert(error.message);
    }
});

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const emailInp = loginForm.querySelector('.emailInp');
    const passInp = loginForm.querySelector('.PassInp');

    let payLoad = {
        email: emailInp.value,
        password: passInp.value,
    };

    axios
        .post(`http://127.0.0.1:5846/api/auth/login`, payLoad)
        .then(function (resp) {
            console.log(resp);
        })
        .catch(function (err) {
            console.log(err);
        });
});
