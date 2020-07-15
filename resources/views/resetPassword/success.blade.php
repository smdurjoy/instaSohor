@extends('layouts.resetPassLayout')

@section('content')
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
@endsection