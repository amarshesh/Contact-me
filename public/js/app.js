const takeValues =  document.querySelector('.contact-info');

let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

takeValues.addEventListener('submit', (data) =>{
     data.preventDefault();

    const formData ={
        name : name.value,
        email : email.value,
        subject : subject.value,
        message : message.value
    }
    console.log(formData);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/' );
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        // console.log(xhr.responseText);
        if(xhr.responseText === 'success'){
            alert('Email-sent');
            names.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
      } else{
          alert('Somthing went wrong')
      }
    }

    xhr.send(JSON.stringify(formData));
});
