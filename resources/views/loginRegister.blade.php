<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
        <link rel="stylesheet" href="{{asset('css/style.css')}}">
        <link rel="stylesheet" href="{{asset('css/responsive.css')}}">
        <link rel="stylesheet" href="{{asset('css/mdb.min.css')}}">
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        <link rel="icon" href="{{ URL::asset('/images/siteLogo.svg') }}" type="image/x-icon"/>
        <title>insTaSohor</title>
    </head>
    <body>
        <div class="container text-center">
            <h2 class="brandName my-4"><img class="siteLogo mb-1" src="{{ asset('images/siteLogo.svg') }}"/>nsTaSohor</h2>
            <div class="row d-flex justify-content-center loginPageRow">
                <div class="col-md-6 tabContainer">
                    <div class="buttonContainer">
                        <button onclick="showPanel(0,'#fefefe')">Login</button>
                        <button onclick="showPanel(1,'#fefefe')">Register</button> 
                    </div>
                    <div class="loginRegPanel">
                        <form class="loginRegForm">
                            <p id="errorId" class="errorMsg d-none"></p>
                            <input type="text" class="form-control formInput mb-4" id="userName" placeholder="User Name" required>
                            <input type="password" class="form-control formInput mb-4" id="password" placeholder="Password" required>

                            <div class="row d-flex justify-content-around">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="form-check-input">
                                    <label class="custom-control-label labels" for="defaultLoginFormRemember">Remember me</label>
                                </div>
                                <a href="" class="labels">Forgot password?</a>
                            </div>
                            <button class="btn btn-block my-3 signInBtn" id="loginBtn">Sign in</button>
                            <p class="labels">
                                Not a member? <a href="javascript:void(0)" onclick="showPanel(1,'#fefefe')">Register</a>
                            </p>
                            <!-- Social login -->
                            <p class="labels">or sign in with:</p>
                            <a href="#" class="mx-2" role="button"><i class="fab fa-facebook-f light-blue-text"></i></a>
                            <a href="#" class="mx-2" role="button"><i class="fab fa-twitter light-blue-text"></i></a>
                            <a href="#" class="mx-2" role="button"><i class="fab fa-linkedin-in light-blue-text"></i></a>
                            <a href="#" class="mx-2" role="button"><i class="fab fa-github light-blue-text"></i></a>
                        </form>
                    </div>
                    <div class="loginRegPanel">
                        <form class="loginRegForm">
                            <input type="text" id="defaultRegisterFormFirstName" class="form-control formInput mb-3" placeholder="Your Name *">
                            <input type="text" id="defaultRegisterFormLastName" class="form-control formInput mb-3" placeholder="Username *">
                            <input type="email" id="defaultRegisterFormEmail" class="form-control mb-3 formInput" placeholder="E-mail">
                            <input type="password" id="defaultRegisterFormPassword" class="form-control formInput mb-3" placeholder="Password *" aria-describedby="defaultRegisterFormPasswordHelpBlock">
                            <input type="password" id="defaultRegisterFormPassword" class="form-control formInput mb-3" placeholder="Confirm Password *" aria-describedby="defaultRegisterFormPasswordHelpBlock">
                            <div class="d-flex justify-content-around mt-4">
                                <p class="labels">Choose Gender:</p>
                                <label class="labels"><input type="radio" name="optradio"> Male</label>
                                <label class="labels"><input type="radio" name="optradio"> Female</label>
                            </div>
                            <p class="labels mt-2">* fields are mandatory</p>
                            <button class="btn my-3 btn-block signInBtn" type="submit">Sign Up</button>
                            <p class="labels">
                                Already a member? <a href="javascript:void(0)" onclick="showPanel(0,'#fefefe')">Login</a>
                            </p>
                            <!-- Social register -->
                            <p class="labels">or sign up with:</p>

                            <a href="#" class="mx-2" role="button"><i class="fab fa-facebook-f light-blue-text"></i></a>
                            <a href="#" class="mx-2" role="button"><i class="fab fa-twitter light-blue-text"></i></a>
                            <a href="#" class="mx-2" role="button"><i class="fab fa-linkedin-in light-blue-text"></i></a>
                            <a href="#" class="mx-2" role="button"><i class="fab fa-github light-blue-text"></i></a>

                            <hr>
                            <!-- Terms of service -->
                            <p class="labels">By clicking
                                <em>Sign up</em> you agree to our
                                <a href="" target="_blank">terms of service</a> 
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    <script type="text/javascript" >
        document.getElementById("loginBtn").addEventListener("click", function(event){
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
                        if(this.responseText == "1") {
                            window.location.href = "/";
                        } else {
                            error.classList.remove('d-none');
                            error.innerText = "Incorrect Username or Password";
                        }
                    }
                }
            xHttp.open('GET', '/onLogin/'+userName+'/'+password, true)
            xHttp.send()
            }
        });
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
    </script>

    </body>
</html>
