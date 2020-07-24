<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Followship extends Model
{
    function followers() {
        $this->belongsTo('App/User', 'id', 'user1_id');
    }
}
