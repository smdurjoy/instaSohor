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
            <p class="d-none" id="msg"></p>
            <div class="row d-flex justify-content-center mt-3">
                <div class="col-lg-6 col-md-12 col-sm-12 resetPassCol">
                    <div class="row aligh-items-center mt-3">
                        <div class="col-md-6">
                            <h2 class="brandName text-left"><img src="{{ asset('/images/siteLogo.svg') }}" class="siteLogo"/>nsTaSohor</h2>
                        </div>
                        <div class="col-md-6">
                            <h2 class="resetPass text-right">Reset Password</h2>
                        </div>
                        <div class="col-md-12 mt-2">
                            <hr class="my-4">
                            @if(Session::has('errorMessage'))
                                <div class="alert alert-danger fade show mt-3" role="alert">
                                    {{ Session::get('errorMessage')  }}
                                </div>
                            @endif
                            <p>In order to reset your password, a code will be sent to an email address you provided when you created your isTaSohor account.</p>
                            <hr class="my-4">
                        </div>
                        <div class="col-md-12 mt-2">    
                            <form action="{{ url('/resetPassword') }}" method="post" name="emailSubmitForm" onsubmit="return validation()">@csrf
                                <h6>Enter your account email address:</h6>
                                <input type="email" class="form-control resetEmailInput mb-3" placeholder="Email: " name="resetMail">
                                <small id="emailHelp" class="form-text validationMsg d-none"></small>

                                <button class="btn btn-sm my-3 float-right resetEmailBtn" id="resetPass" type="submit">Reset password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
        </div>

        <script type="text/javascript">
            function validation() {
                const resetMail = document.forms["emailSubmitForm"]["resetMail"].value;
                if(resetMail == "") {
                    const emailHelp = document.getElementById('emailHelp');
                    emailHelp.classList.remove('d-none');
                    emailHelp.innerText = "Please enter your email address.";
                    return false;
                }
            }
        </script>
    </body>
</html>