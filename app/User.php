<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    function post() {
        return $this->hasMany('App\Post', 'user_id')->get();
    }

    function friends() {
        return $this->belongsToMany('App\Friend')->withPivot('is_follow', 'follow_btn_text')->withTimestamps();
    }
}
