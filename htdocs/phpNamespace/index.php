<?php

require_once('app/UserModel.php');

use App\UserModel;

class UserController
{
    public function index(){
        $user1 = UserModel::find(101);
        $user2 = UserModel::find(102);
        var_dump($user1, $user2);
    }
}
