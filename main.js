'use strict'

const form = document.getElementById('form-subscribe')

form.addEventListener('submit', (e) => {
 e.preventDefault()

 const formData = new FormData(form)
 const email = formData.get('email')

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