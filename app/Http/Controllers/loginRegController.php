<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class loginRegController extends Controller
{
    function loginRegPage() {
        return view('loginRegister');
    }
}
