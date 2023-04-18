<?php

namespace App;

class UserModel
{
    public static function find($id)
    {
        if($id > 100){
            return 'ok';
        }
    }
}