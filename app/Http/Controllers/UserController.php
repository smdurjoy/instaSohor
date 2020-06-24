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
}
