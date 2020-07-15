@extends('layouts.resetPassLayout')

@section('content')
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
@endsection
    

@section('script')
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
@endsection
