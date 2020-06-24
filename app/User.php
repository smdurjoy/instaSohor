<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    function post() {
        return $this->hasMany('App\Post', 'user_id')->get();
    }
}
