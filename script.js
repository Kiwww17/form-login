const status = document.getElementById('show-pass');
const pass = document.getElementById('pass-input');
const button = document.getElementById('btn');
const labelEmail = document.getElementById('email-p'); 
const labelPass = document.getElementById('pass-p');
status.onclick = function () {
    if (pass.type === "password") {
        pass.type = Text;
    }
    else {
        pass.type = "password";
    }
};

button.onclick = function () {
    const emailInput = document.getElementById('email-input');

    const emailValue = emailInput.value;
    const passValue = pass.value;

    const etDotSym = emailValue.includes('@', '.');
    // let dotSym = emailValue.includes('.');
    // console.log(credentials);

    const passUpp = /[A-Z]/.test(passValue);
    const passLow = /[a-z]/.test(passValue);
    const passNum = /[0-9]/.test(passValue)

    console.log(passUpp);
    console.log(passLow);
    console.log(passNum);

    if(!etDotSym){
        
        labelEmail.textContent = "Enter a valid email !";
        
    }
    else{
        
        labelEmail.textContent="";
        alert('email valid');
    }

    if(!passUpp ){
        labelPass.textContent = "Your password must contai uppercase char";
    }
    else if(!passLow){
        labelPass.textContent = "Your password must contain lowwercase char";
    }
    else if(!passNum){
        labelPass.textContent = "Your password must contain at least one number";
    }
    else {
        labelPass.textContent="";
        alert('pass valid');
    }
};


