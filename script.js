const signupForm = document.getElementById('signupForm');
//error elements
const firstnameError = document.getElementById('firstnameError');
const lastnameError = document.getElementById('lastnameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

//Handling form submission
signupForm.addEventListener('submit', function (event) {
    //prevent default behaviour
    event.preventDefault();

    //getting form field values
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('emailAddress').value;
    const password = document.getElementById('password').value;

    let valid = true;

    //clear error messages
    [firstnameError, emailError, passwordError].forEach(item=>{
        item.textContent = '';
    })

    //Validating form fields
    //firstname validation
    if (firstname == "") {
        valid = false;
        firstnameError.textContent = 'First Name cannot be empty';
        firstnameError.style.display = 'block';
    }

    if (lastname == "") {
        valid = false;
        lastnameError.textContent = 'Last Name cannot be empty';
        lastnameError.style.display = 'block';
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
