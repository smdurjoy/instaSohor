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
                        @if(Session::has('successMessage'))
                            <div class="alert alert-success fade show mt-3" role="alert">
                                {{ Session::get('successMessage')  }}
                            </div>
                        @endif
                        @if(Session::has('errorMessage'))
                            <div class="alert alert-danger fade show mt-3" role="alert">
                                {{ Session::get('errorMessage')  }}
                            </div>
                        @endif
                    <hr class="my-4">
                    </div>
                    <div class="col-md-12">
                        <form action="{{ url('changePassword/'.$passResetToken->pass_reset_token) }}" method="post" name="codeVerifyForm" onsubmit="return validation()">@csrf
                            <h6>Enter the code</h6>
                            <input type="text" class="d-none" name="pass_reset_token" value="{{ $passResetToken->pass_reset_token }}">
                            <input type="text" name="verificationCode" class="form-control cngPassInput mb-3" placeholder="Code: ">
                            <small id="codeHelp" class="form-text validationMsg d-none"></small>

                            <button class="btn btn-sm my-3 float-right resetEmailBtn" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>  
    </div>

    <script type="text/javascript">
        function validation() {
            const verificationCode = document.forms["codeVerifyForm"]["verificationCode"].value;
            if(verificationCode == "") {
                const codeHelp = document.getElementById('codeHelp');
                codeHelp.classList.remove('d-none');
                codeHelp.innerText = "Please enter the code.";
                return false;
            }
        }
    </script>
</body>
</html>