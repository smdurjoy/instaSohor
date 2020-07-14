// login function
const loginBtn =  document.getElementById("loginBtn")
let err = document.getElementById('errorId');

loginBtn.addEventListener("click", function(event){
    event.preventDefault()
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;

    if(userName == "") {
        err.classList.remove('d-none');
        err.innerText = "Username is required";
    } else if(password == "") {
        err.classList.remove('d-none');
        err.innerText = "Password is required";
    } else {
        loginBtn.disabled = true;
        loginBtn.innerText = "Signing in..."
        axios.post('/onLogin', {
            userName: userName,
            password: password
        }).then((response) => {
            if(response.status == 200 && response.data == 1) {
                window.location.href = "/";
            } else {
                err.classList.remove('d-none');
                err.innerText = "Incorrect Username or Password";
                loginBtn.disabled = false;
                loginBtn.innerText = "Sign In"
            }
        }).catch((error) => {
            err.classList.remove('d-none');
            err.innerText = "Something went wrong !";
            loginBtn.disabled = false;
            loginBtn.innerText = "Sign In"
        })
    }
});

// Register function
const signUp = document.getElementById('signUp');
let errorReg = document.getElementById('errorReg');
let nameHelp = document.getElementById('nameHelp');
let userNameHelp = document.getElementById('userNameHelp');
let emailHelp = document.getElementById('emailHelp');
let passHelp = document.getElementById('passHelp');
let cnfPassHelp = document.getElementById('cnfPassHelp');

signUp.addEventListener('click', function(e) {
    e.preventDefault();
    const form = document.getElementById("regForm");
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value; 
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const confirmPass = document.getElementById('confirmPass').value;
    const gender = form.elements["gender"].value;

    if(name == "") {
        nameHelp.classList.remove('d-none');
        nameHelp.innerText = "You must enter your name !";
    }
    else if(username == "") {
        userNameHelp.classList.remove('d-none');
        userNameHelp.innerText = "You must enter your username !";
    }
    else if(email == "") {
        emailHelp.classList.remove('d-none');
        emailHelp.innerText = "You must enter your email !";
    }
    else if(pass == "") {
        passHelp.classList.remove('d-none');
        passHelp.innerText = "You must enter your password !";
    }
    else if(confirmPass == "") {
        cnfPassHelp.classList.remove('d-none');
        cnfPassHelp.innerText = "Please confirm your password !";
    } 
    else if(pass != confirmPass) {
        cnfPassHelp.classList.remove('d-none');
        cnfPassHelp.innerText = "Password didn't match !";
    }
    else {
        axios.post('/register', {
            name: name,
            username: username,
            password: pass,
            email: email,
            gender: gender 
        }).then((response) => {
            if(response.status == 200 && response.data == 1) {
                window.location.href = "/";
            } 
            else if(response.status == 200 && response.data == 2) {
                errorReg.classList.remove('d-none');
                errorReg.innerText = "Username already exists !";
            }
            else if(response.status == 200 && response.data == 3) {
                errorReg.classList.remove('d-none');
                errorReg.innerText = "This email is already taken !";
            }
            else {
                errorReg.classList.remove('d-none');
                errorReg.innerText = "Something went wrong !";
            }
        }).catch((error) => {
            errorReg.classList.remove('d-none');
            errorReg.innerText = "Something went wrong !";
        });
    }
});

// Password hide show
function passHideShow(pass, passI) {
    let password = document.getElementById(pass);
    let passIcon = document.getElementById(passI);

    if(password.type === 'password') {
        password.type = 'text';
        passIcon.classList.remove('fa-eye');
        passIcon.classList.add('fa-eye-slash');
    } else {
        password.type = 'password';
        passIcon.classList.remove('fa-eye-slash');
        passIcon.classList.add('fa-eye');
    }
}

// login register tabs
const tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
const tabPanels=document.querySelectorAll(".tabContainer .loginRegPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor = "";
        node.style.color = "";
    });
    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabButtons[panelIndex].style.color = "#1b1e21";

    tabPanels.forEach(function(node){
        node.style.display = "none";
    });
    tabPanels[panelIndex].style.display = "block";
    tabPanels[panelIndex].style.backgroundColor = colorCode;
}
showPanel(0,'#fefefe');