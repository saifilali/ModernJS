// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur',validateZipCode);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('phonenumber').addEventListener('blur',validatePhoneNumber);

function validateName(){
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  }
  else{
    name.classList.remove('is-invalid');
  }
}

function validateZipCode(){
  const zipCode = document.getElementById('zipcode');
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  if(!re.test(zipCode.value)){
    zipCode.classList.add('is-invalid');
  }
  else{
    zipCode.classList.remove('is-invalid');
  }
}

function validateEmail(){
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  }
  else{
    email.classList.remove('is-invalid');
  }
}

function validatePhoneNumber(){
  const phoneNumber = document.getElementById('phonenumber');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(phoneNumber.value)){
    phoneNumber.classList.add('is-invalid');
  }
  else{
    phoneNumber.classList.remove('is-invalid');
  }
}
