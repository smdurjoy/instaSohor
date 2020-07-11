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
                            <input type="text" class="form-control formInput mb-4" id="userName" placeholder="User Name">
                            <input type="password" class="form-control formInput mb-4" id="password" placeholder="Password">

                            <div class="row d-flex justify-content-around">
                                <div class="d-flex">
                                    <input type="checkbox" class="form-check-input">
                                    <label class="labels" for="checkBox">Remember me</label>
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
                        <form class="loginRegForm" id="regForm">
                            <input type="text" id="name" class="form-control formInput mb-3" placeholder="Your Name *">
                            <input type="text" id="username" class="form-control formInput mb-3" placeholder="Username *">
                            <input type="email" id="email" class="form-control mb-3 formInput" placeholder="E-mail">
                            <input type="password" id="pass" class="form-control formInput mb-3" placeholder="Password *">
                            <input type="password" id="confirmPass" class="form-control formInput mb-3" placeholder="Confirm Password *">
                            <div class="d-flex justify-content-around mt-4">
                                <p class="labels">Choose Gender:</p>
                                <label class="labels"><input type="radio" name="gender" value="male"> Male</label>
                                <label class="labels"><input type="radio" name="gender" value="female"> Female</label>
                            </div>
                            <p class="labels mt-2">* fields are mandatory</p>
                            <button class="btn my-3 btn-block signInBtn" id="signUp">Sign Up</button>
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
    <script type="text/javascript" src="{{ asset('js/loginReg.js') }}"></script>
    </body>
</html>