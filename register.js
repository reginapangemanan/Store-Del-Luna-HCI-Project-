function validation(){

    const fullname = document.querySelector('#fullname').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPass = document.querySelector('#confirmPass').value;

    if (fullname.length == " ") {
        alert('Name must be filled!');
        return false; 
    } else if(email.length == " "){
        alert('Email must be filled!');
        return false; 
    }  else if(password.length == " "){
        alert('Password must be filled!');
        return false; 
    }else if (password.length < 8 || password.length > 15){
        alert('Password must be more than 8 character');
        return false; 
    } else if(confirmPass.length == " "){
        alert('Comfrim password must be filled!');
        return false; 
    }else if (confirmPass != password){
        alert('Dont match!');
        return false; 
    }
    return true;
}