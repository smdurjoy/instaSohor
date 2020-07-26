<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PostImage extends Model
{
    function post() {
        $this->belongsTo('App/Post', 'post_id')->select('id', 'user_id');
    }
}
