<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class loginRegController extends Controller
{
    function loginRegPage() {
        return view('loginRegister');
    }

    function onLogin(Request $request) {
        $userName = $request->userName;
        $password = $request->password;

        $count = User::where('user_name', $userName)->where('password', $password)->count();

        if($count == 1) {
            $request->session()->put('userNameKey', $userName);
            return "1";
        } else {
            return "0";
        }
    }

    function onLogout(Request $request) {
        $request->session()->flush('userNameKey');
        return redirect('/login-register');
    }
}
