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
                        <div class="alert alert-success fade show mt-3" role="alert">
                            <i class="fas fa-check-circle"></i> Your Password has been changed successfully !
                        </div>
                    <hr class="my-4">
                    </div>
                    <div class="col-md-12">
                         <a class="btn btn-sm my-3 float-right resetEmailBtn" href="/login-register">Login Now</a>
                    </div>
                </div>
            </div>
        </div>  
    </div>
</body>
</html>