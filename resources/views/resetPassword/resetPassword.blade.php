@extends('layouts.resetPassLayout')

@section('content')
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
@endsection

@section('script') 
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
@endsection
