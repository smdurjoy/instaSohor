@extends('layouts.resetPassLayout')

@section('content')
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
@endsection
    
@section('script')
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    <script type="text/javascript" src="{{ asset('js/resetPass.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/axios.min.js') }}"></script>
@endsection