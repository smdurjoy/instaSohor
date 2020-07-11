// login function
const loginBtn =  document.getElementById("loginBtn")
loginBtn.addEventListener("click", function(event){
    event.preventDefault()
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    let error = document.getElementById('errorId');

    if(userName == "") {
        error.classList.remove('d-none');
        error.innerText = "Username is required";
    } else if(password == "") {
        error.classList.remove('d-none');
        error.innerText = "Password is required";
    } else {
        const xHttp = new XMLHttpRequest;
        xHttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                loginBtn.disabled = true;
                loginBtn.innerText = "Signing in..."
                if(this.responseText == "1") {
                    window.location.href = "/";
                } else {
                    error.classList.remove('d-none');
                    error.innerText = "Incorrect Username or Password";
                    loginBtn.disabled = false;
                    loginBtn.innerText = "Sign In"
                }
            }
        }
        xHttp.open('GET', '/onLogin/'+userName+'/'+password, true)
        xHttp.send()
    }
});

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