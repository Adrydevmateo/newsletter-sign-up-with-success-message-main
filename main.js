'use strict'

const form = document.getElementById('form-subscribe')

const validateEmail = (email) => {
 const emailRegex = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
 return emailRegex.test(email);
}

form.addEventListener('input', () => {
 if (form.classList.contains('invalid')) form.classList.remove('invalid')
})

form.addEventListener('submit', (e) => {
 e.preventDefault()

 const formData = new FormData(form)
 const email = formData.get('email')
 const isValid = validateEmail(email)

 if (!email || !isValid) {
  form.classList.add('invalid')
  return new Error('Invalid Email')
 }

 const reqBody = {
  name: 'Email',
  message: email
 }

 const options = {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
   'Accept': 'application/json'
  },
  body: JSON.stringify(reqBody)
 }
 const uri = 'https://formsubmit.co/ajax/adrydevmateo@gmail.com'

 fetch(uri, options)
})