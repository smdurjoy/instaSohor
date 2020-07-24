<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Friend;
use Illuminate\Support\Facades\Hash;

class loginRegController extends Controller
{
    function loginRegPage() {
        return view('loginRegister');
    }

    function onLogin(Request $request) {
        $userName = $request->input('userName');
        $password =$request->input('password');

        $user = User::where('user_name', '=', $userName)->first();

        if(!$user) {
            return 0;
        }
        if(!Hash::check($password, $user->password)) {
            return 0;
        }
        $request->session()->put('userNameKey', $userName);
        return 1;
    }

    function onLogout(Request $request) {
        $request->session()->flush('userNameKey');
        return redirect('/login-register');
    }

    function onRegister(Request $request) {
        $name = $request->input('name');
        $username = $request->input('username');
        $password = Hash::make($request->input('password'));
        $email = $request->input('email');
        $gender = $request->input('gender');

        $userName = User::where('user_name', '=', $username);
        $userEmail = User::where('user_name', '=', $email);

        if ($userName->exists()) {
            return 2;
        } 
        else if($userEmail->exists()) {
            return 3;
        }
        else {
            $result = User::insert([
                'full_name' => $name,
                'user_name' => $username,
                'email' => $email,
                'password' => $password,
                'gender' => $gender,
                'created_at' => date('Y-m-d H:i:s'),
            ]);
                
            if($result == true) {
                $request->session()->put('userNameKey', $username);
                return 1;
            } else {
                return 0;
            }
        }
    }
}
