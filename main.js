'use strict'

const form = document.getElementById('form-subscribe')

const validateEmail = (email) => {
 const emailRegex = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
 return emailRegex.test(email);
}

function Submit() {
 form.classList.add('submitting-form')
 const formData = new FormData(form)
 const email = formData.get('email')
 const isValid = validateEmail(email)

 if (!email || !isValid) {
  form.classList.add('invalid')
  form.classList.remove('submitting-form')
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
  .then(res => res.json())
  .then(data => {
   const { success } = data
   if (success === 'false') return -1
   setUserEmail(email)
   location.href = '/thanks.html'
   return form.classList.remove('submitting-form')
  })
}

form.addEventListener('keydown', (e) => {
 if (e.key === 'Enter') {
  e.preventDefault()
  Submit()
 }
})

form.addEventListener('input', () => {
 if (form.classList.contains('invalid')) form.classList.remove('invalid')
})

form.addEventListener('submit', (e) => {
 e.preventDefault()

 Submit()
})