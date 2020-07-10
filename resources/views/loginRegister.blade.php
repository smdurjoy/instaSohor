<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
        <link rel="stylesheet" href="{{asset('css/style.css')}}">
        <link rel="stylesheet" href="{{asset('css/responsive.css')}}">
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        <link rel="icon" href="{{ URL::asset('/images/siteLogo.svg') }}" type="image/x-icon"/>
    </head>
    <body class="loginReg">
        <div class="container text-center">
            <h2 class="mt-4 mb-4">insTaSohor</h2>
            <div class="row d-flex justify-content-center loginPageRow">
                <div class="col-md-6 tabContainer">
                    <div class="buttonContainer">
                        <button onclick="showPanel(0,'#fefefe')">Login</button>
                        <button onclick="showPanel(1,'#fefefe')">Register</button> 
                    </div>
                    <div class="loginRegPanel">
                        <form class="loginRegForm">
                            <input type="text" class="form-control formInput mb-4" placeholder="User Name">
                            <input type="password" class="form-control formInput mb-4" placeholder="Password">

                            <div class="row d-flex justify-content-around">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="form-check-input">
                                    <label class="custom-control-label labels" for="defaultLoginFormRemember">Remember me</label>
                                </div>
                                <a href="" class="labels">Forgot password?</a>
                            </div>
                            <button class="btn btn-block my-3 signInBtn" type="submit">Sign in</button>
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
                        <!-- Default form login -->
                    </div>
                    <div class="loginRegPanel">
                        <!-- Default form register -->
                        <form class="loginRegForm">
                            <input type="text" id="defaultRegisterFormFirstName" class="form-control formInput mb-3" placeholder="Your Name *">
                            <input type="text" id="defaultRegisterFormLastName" class="form-control formInput mb-3" placeholder="Username *">
                            <input type="email" id="defaultRegisterFormEmail" class="form-control mb-3 formInput" placeholder="E-mail">
                            <input type="password" id="defaultRegisterFormPassword" class="form-control formInput mb-3" placeholder="Password *" aria-describedby="defaultRegisterFormPasswordHelpBlock">
                            <input type="password" id="defaultRegisterFormPassword" class="form-control formInput mb-3" placeholder="Confirm Password *" aria-describedby="defaultRegisterFormPasswordHelpBlock">
                            <input type="text" id="defaultRegisterFormLastName" class="form-control formInput mb-3" placeholder="Username *">
                            <div class="d-flex justify-content-around mt-4">
                                <p class="labels">Choose Gender:</p>
                                <label class="labels"><input type="radio" name="optradio"> Male</label>
                                <label class="labels"><input type="radio" name="optradio"> Female</label>
                            </div>
                            <p class="labels mt-2">* fields are mandatory</p>
                            <button class="btn my-3 btn-block signInBtn" type="submit">Sign Up</button>

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
    <script>
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
