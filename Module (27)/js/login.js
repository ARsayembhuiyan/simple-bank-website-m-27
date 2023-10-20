// step-1: add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){   
 // step-2: get the email address inside the email input field 
/* always remember to use .value to get text from an input field */
const emailField = document.getElementById('uses-email');
const emaiL = emailField.value;


// step-3: get Password
/**
 * set id on the html element
 * get the element
 * get the value from the element
 **/ 
const passwordField = document.getElementById('uses-Password');
const Password = passwordField.value;

// step-4: verify email and password
if (emaiL === 'sayem@sayem.com' && Password === 'secret') {
    window.location.href= 'bank.html'
}
else( 
  alert('wrong password')
)
})