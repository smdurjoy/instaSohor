<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Friend extends Model
{
    function friends() {
        return $this->belongsToMany('App\User')->withPivot('is_follow', 'follow_btn_text');
    }
}
