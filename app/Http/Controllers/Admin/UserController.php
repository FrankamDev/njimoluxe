<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{

   

    public function index()
{
    return Inertia::render('Admin/Users/UsersIndex', [
        'users' => User::all(),
    ]);
}
}