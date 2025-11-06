const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const pwInput = document.getElementById("password");
const confirmPwInput = document.getElementById("confirmPassword");
const registrationForm = document.getElementById("registrationForm");
let userId = 1;
const userList = [];



let userSettings;
try {
  userSettings = JSON.parse(localStorage.getItem('userInfo'));
} catch (e) {
  console.error('Error parsing settings from local storage', e);
  userSettings = null; // or set to default settings
}
if(userSettings){
  console.log(userSettings);
  usernameInput.value = userSettings.username;
  emailInput.value = userSettings.emailAddress;
}

registrationForm.addEventListener('submit' ,(event) =>{
  event.preventDefault();// Stop the default form submission
  if(!usernameInput.validity.valid || usernameInput.trim === " "){
    alert('Please enter your name.');
    usernameInput.focus();
    return;
  }else if(!emailInput.validity.valid){
    alert('Please enter email');
    emailInput.focus();
    return;
  }else if(!pwInput.validity.valid){
    alert('Please enter Password');
    pwInput.focus();
    return;
  }else if(confirmPwInput.value !== pwInput.value){
    alert('Please confirm Password');
    pwInput.focus();
    return;
  }else{
           // If valid, process the form data
          const newUser = {
          userId: userId++,
          username: usernameInput.value,
          emailAddress: emailInput.value,
          password:confirmPwInput.value,      
        }
        userList.push(newUser);
        // Storing an object
        localStorage.setItem('userInfo',JSON.stringify(newUser));
        //retrieving user object
        const retrievedUserString = localStorage.getItem('userInfo');
        const retrievedUserObject = JSON.parse(retrievedUserString);
        console.log(retrievedUserObject);
        alert("Form Submitted!! Name:" + retrievedUserObject.username);
        localStorage.setItem('username',retrievedUserObject.username);
        localStorage.setItem('emailAddress',retrievedUserObject.emailAddress);
        registrationForm.reset(); // Optionally reset the form
        usernameInput.value = retrievedUserObject.username;
        emailInput.value = retrievedUserObject.emailAddress;
  }
});
// localStorage.clear(); 
// This would remove 'username' and any other stored items.


//username Validity
usernameInput.addEventListener('input',(event)=>{
if(usernameInput.validity.valueMissing){
  usernameInput.setCustomValidity('Please enter a vaild user name')
}else if (usernameInput.validity.tooShort){
  usernameInput.setCustomValidity('Username is too Short min length is 2 characters');
}else {
  usernameInput.setCustomValidity('');
}
  usernameError.textContent = usernameInput.validationMessage;
})

//email Validity
emailInput.addEventListener('input',(event)=>{
    if (emailInput.validity.typeMismatch) {
        emailInput.setCustomValidity('Please enter a valid email address, for example, name@example.com.');
      } else if (emailInput.validity.valueMissing) {
        emailInput.setCustomValidity('We need your email address to contact you!');
      } else {
        emailInput.setCustomValidity(''); // Clear custom error if valid
      }
      // Display the custom message or clear it
      emailError.textContent = emailInput.validationMessage;
    }); 

    //password Validity
  pwInput.addEventListener('input',(event)=>{
    if(pwInput.validity.valueMissing){
      pwInput.setCustomValidity('Password is required to sign up');
    }else if (pwInput.validity.tooShort){
      pwInput.setCustomValidity('password is too short must be atleast 8 characters long');
    }else if(pwInput.validity.patternMismatch){
      pwInput.setCustomValidity("Password must match format above");
    } else {
      pwInput.setCustomValidity('');
    }
    passwordError.textContent = pwInput.validationMessage;
  })

  // confirmPassword validity
  confirmPwInput.oninput = function(){
    // checking passwords 
    // console.log(pwInput.value +" "+ confirmPwInput.value);
    if(confirmPwInput.validity.valueMissing){
      confirmPasswordError.classList.add('error-message');
      confirmPwInput.setCustomValidity('You must confirm password to submit');
  }else if (confirmPwInput.value !== pwInput.value){
    confirmPwInput.setCustomValidity('Passwords must match');
    confirmPasswordError.classList.add('error-message');
  }else if(confirmPwInput.value === pwInput.value){
    confirmPwInput.setCustomValidity('Passwords Match');
    confirmPasswordError.classList.remove('error-message');
    confirmPasswordError.classList.add('success-message');
  }
  confirmPasswordError.textContent = confirmPwInput.validationMessage;
}

    





