'use strict';

const passwordInput = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_pass');

const passArea = document.querySelector('#password_area');
const messageArea = document.createElement('span');
const message = "* Passwords do not match";
messageArea.textContent = message;
messageArea.setAttribute('style', 'color: red');

const blankMess = document.createElement('span');

passwordInput.addEventListener('input', () => {
  if (passwordInput.value != confirmPassword.value) {
    passArea.appendChild(messageArea); 
  }
});

confirmPassword.addEventListener('input', () => {
  if (confirmPassword.value === passwordInput.value) {
    passArea.replaceChild(blankMess, messageArea);
  }
});

