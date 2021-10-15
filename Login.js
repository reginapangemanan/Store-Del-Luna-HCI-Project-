function validationL(){

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if(email.length == " "){
        alert('Email must be filled!');
        return false; 
    }  else if(password.length == " "){
        alert('Password must be filled!');
        return false; 
    }else if (password.length < 8 || password.length > 15){
        alert('Password must be more than 8 character');
        return false; 
    }
    return true;
}