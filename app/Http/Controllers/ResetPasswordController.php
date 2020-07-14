<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Mail\PassResetMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Hash;

class ResetPasswordController extends Controller
{
    function resetPass(Request $request) {
        if($request->isMethod('post')) {
            $resetMail = $request->input('resetMail');
            $user = User::where('email', $resetMail);
            $userEmail = $user->select('email')->first();
    
            if($userEmail == true) {
                $user->update(['pass_reset_token' => Str::random(20)]);
                $user->update(['pass_reset_code' => rand(10000,99999)]);
                $passResetToken = $user->select('pass_reset_token')->first();
                $passResetCode = $user->select('pass_reset_code')->first();
                $mailBody = [
                    'title' => 'Reset Your Password',
                    'body' => 'Your password reset verification code',
                    'code' => $passResetCode->pass_reset_code,
                ];
        
                Mail::to($userEmail)->send(new PassResetMail($mailBody));
    
                $message = "We have send you a code in your email address.";
                Session::flash('successMessage', $message);
                return view('resetPassword.codeVerify')->with(['passResetToken' => $passResetToken, 'passResetCode' => $passResetCode]);
    
            } else {
                $message = "This email address doesn't match to our record !";
                Session::flash('errorMessage', $message);
                return redirect()->back();
            }
        }

        return view('resetPassword.resetPassword');
    }

    function changePass(Request $request) {
        $pass_reset_token = $request->input('pass_reset_token');
        $verificationCode = $request->input('verificationCode');

        $user = User::where('pass_reset_code', $verificationCode);
        $verifyCode = $user->select('pass_reset_code')->first();

        if($verifyCode == true) {
            return view('resetPassword.changePass')->with(['passResetToken' => $pass_reset_token, 'verifyCode' => $verifyCode]);
        } else {
            $message = "Code doesn't match ! try again .";
            Session::flash('errorMessage', $message);   
            return redirect()->back();
        }
    }

    function updatePass(Request $request) {
        $newPass = Hash::make($request->input('newPass'));
        $passResetToken = $request->input('passResetToken');
        $passResetCode = $request->input('passResetCode');

        $result = User::where('pass_reset_token', $passResetToken)->where('pass_reset_code', $passResetCode)->update(['password' => $newPass]);

        if($result == true) {
            return 1;
        } else {
            return 0;
        }
    }

    function success() {
        return view('resetPassword.success');
    }
}
