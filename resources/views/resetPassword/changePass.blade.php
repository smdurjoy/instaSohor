<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
        <p class="d-none" id="msg"></p>
        <div class="row d-flex justify-content-center mt-3">
            <div class="col-lg-6 col-md-12 col-sm-12 resetPassCol">
                <div class="row aligh-items-center mt-3">
                    <div class="col-md-6">
                        <h2 class="brandName text-left"><img src="{{ asset('/images/siteLogo.svg') }}" class="siteLogo"/>nsTaSohor</h2>
                    </div>
                    <div class="col-md-6">
                        <h2 class="resetPass text-right">Change Password</h2>
                    </div>
                    <div class="col-md-12 mt-2">
                    <hr class="my-4">
                        <p id="errorId" class="errorMsg d-none"></p>
                        <h6>Choose a new password</h6>
                        <div class="inputDiv">
                            <input type="password" id="newPass" class="form-control cngPassInput mb-3" placeholder="New Password ">
                            <i class="fas fa-eye passIcon rPassI" id="passIconN"  onclick="passHideShow('newPass', 'passIconN')"></i>
                        </div>
                        <small id="newPassHelp" class="form-text validationMsg d-none"></small>
                        <div class="inputDiv">
                            <input type="password" id="confNewPass" class="form-control cngPassInput mb-3" placeholder="Confirm New Password ">
                            <i class="fas fa-eye passIcon rPassI"  id="passIconC" onclick="passHideShow('confNewPass', 'passIconC')"></i>
                        </div>
                        <small id="confNewPassHelp" class="form-text validationMsg d-none"></small>

                        <input id="passResetToken" class="d-none" value="{{ $passResetToken }}">
                        <input id="passResetCode" class="d-none" value="{{ $verifyCode->pass_reset_code }}">

                    <hr class="my-4">   
                    </div>
                    <div class="col-md-12">
                        <button class="btn btn-sm my-3 float-right resetEmailBtn" id="resetPass">Update</button>
                    </div>
                </div>
            </div>
        </div>  
    </div>

    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    <script type="text/javascript" src="{{ asset('js/resetPass.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/axios.min.js') }}"></script>
</body>
</html>