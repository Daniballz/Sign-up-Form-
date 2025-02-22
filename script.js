const signupForm = document.getElementById('signupForm');
//error elements
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

//Handling form submission
signupForm.addEventListener('submit', function (event) {
    //prevent default behaviour
    event.preventDefault();

    //getting form field values
    const username = document.getElementById('username').value;
    const email = document.getElementById('emailAddress').value;
    const password = document.getElementById('password').value;

    let valid = true;

    //clear error messages
    [usernameError, emailError, passwordError].forEach(item=>{
        item.textContent = '';
    })

    //Validating form fields
    //username validation
    if (username.length < 3) {
        valid = false;
        usernameError.textContent = 'Your username must have at least 3 characters';
        usernameError.style.display = 'block';
    }

    //email validation
    const emailPattern = /^([\w.-]{2,50})@[a-z0-9]{2,20}\.[a-z0-9]{2,20}/i;
    //example_.123@gmail.com
    //regex.test(email)
    if (!emailPattern.test(email)) {
        valid = false;
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
    }

    //password validation
    function validatePassword (password){
        //check if password has at least 6 characters
        const lengthPattern = /\S{6,}/;

        //check if passwword has at least 1 number
        const digitPattern = /\d/;

        //return test
        return lengthPattern.test(password) && digitPattern.test(password);
    }
    if(!validatePassword(password)) {
        valid = false;
        passwordError.textContent = 'Password must be at least 6 characters long and must contain a number';
        passwordError.style.display = 'block';
    }

    //If form is valid, subit the form
    if (valid) {
        alert('Form submitted successfully');
    }
})
