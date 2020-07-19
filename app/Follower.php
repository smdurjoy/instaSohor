<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Follower extends Model
{
    function user() {
        $this->belongsTo('App\User', 'user_id')->get();
    }
}
