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
        <div class="container">
            <div class="row d-flex justify-content-center mt-3">
                <div class="col-md-6 resetPassCol">
                    <div class="row aligh-items-center mt-3">
                        <div class="col-md-6">
                            <h2 class="brandName text-left"><img src="{{ asset('/images/siteLogo.svg') }}" class="siteLogo"/>nsTaSohor</h2>
                        </div>
                        <div class="col-md-6">
                            <h2 class="resetPass text-right">Reset Password</h2>
                        </div>
                        <div class="col-md-12 mt-2">
                            <hr class="my-4">
                            <p>In order to reset your password, link will be sent to an email address you provided when you created your isTaSohor account.</p>
                            <hr class="my-4">
                        </div>
                        <div class="col-md-12 mt-2">
                            <h6>Enter your account email address:</h6>
                            <input type="email" class="form-control resetEmailInput mb-3" placeholder="Email: ">
                        </div>
                        <div class="col-md-12">
                            <button class="btn my-3 btn-sm float-right resetEmailBtn" id="signUp">Reset password</button>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </body>
</html>