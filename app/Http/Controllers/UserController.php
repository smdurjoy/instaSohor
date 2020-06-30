<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    function getUserData() {
        $result = User::all();
        return $result;
    }

    function updateUserData(Request $request) {
        $id = $request->input('id');
        $fullName = $request->input('full_name');
        $userName = $request->input('user_name');
        $email = $request->input('email');
        $education = $request->input('education');
        $work = $request->input('work');
        $address = $request->input('address');

        $result = User::where('id', $id)->update(['full_name' => $fullName, 'user_name' => $userName, 'email' => $email, 'education' => $education, 'work' => $work, 'address' => $address]);

        if($result == true) {
            return 1;
        } else {
            return 0;
        }
    }

    function updateBio(Request $request) {
        $id = $request->input('id');
        $bio = $request->input('bio');
        User::where('id', $id)->update(['bio' => $bio]);
    }
}
