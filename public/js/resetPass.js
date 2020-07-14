// password reset
const resetPass = document.getElementById('resetPass');
resetPass.addEventListener('click', function(e) {
    e.preventDefault();
    const newPass = document.getElementById('newPass').value;
    const confNewPass = document.getElementById('confNewPass').value;
    const newPassHelp = document.getElementById('newPassHelp');
    const confNewPassHelp = document.getElementById('confNewPassHelp');
    const passResetToken = document.getElementById('passResetToken').value;
    const passResetCode = document.getElementById('passResetCode').value;
    const errorId = document.getElementById('errorId');

    if(newPass == "") {
        newPassHelp.classList.remove('d-none');
        newPassHelp.innerText = "Please enter a password";
    } else if(confNewPass == "") {
        confNewPassHelp.classList.remove('d-none');
        confNewPassHelp.innerText = "Please confirm your password";
    } else if(newPass !== confNewPass) {
        confNewPassHelp.classList.remove('d-none');
        confNewPassHelp.innerText = "Password didn't match !";
    } else {
        resetPass.innerText = "Updating ...";
        resetPass.disabled = true;
        axios.post('/updatePassword/'+passResetToken, { 
            newPass: newPass, 
            passResetToken: passResetToken, 
            passResetCode: passResetCode, 
         }).then((response) => {
            if(response.status == 200 && response.data == 1) {
                window.location.href = '/password-reset-success';
            } else {
                errorId.classList.remove('d-none');
                errorId.innerText = "Something went wrong ! try again .";
                resetPass.innerText = "Update";
                resetPass.disabled = false;
            }
        }).catch((error) => {
            errorId.classList.remove('d-none');
            errorId.innerText = "Something went wrong ! try again .";
            resetPass.innerText = "Update";
            resetPass.disabled = false;
        });
    }
});

function passHideShow(pass, icon) {
    let password = document.getElementById(pass);
    let passIcon = document.getElementById(icon);

    if(password.type === "password") {
        password.type = "text";
        passIcon.classList.remove('fa-eye');
        passIcon.classList.add('fa-eye-slash');
    } else {
        password.type = "password";
        passIcon.classList.remove('fa-eye-slash');
        passIcon.classList.add('fa-eye');
    }
}