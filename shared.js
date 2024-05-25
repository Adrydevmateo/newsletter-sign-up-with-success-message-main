function setUserEmail(email) {
 if (email) return sessionStorage['userEmail'] = email
}

function getUserEmail() {
 return sessionStorage['userEmail']
}