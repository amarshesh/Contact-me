const takeValues =  document.querySelector('.contact-info');


let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

takeValues.addEventListener('submit', (data) =>{
     data.preventDefault();
    let formData ={
        name : name.value,
        email : email.value,
        subject : subject.value,
        message : message.value
    }
    console.log(formData)
})
