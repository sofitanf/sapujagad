<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class AuthController extends Controller
{
    public function login()
    {
        return view('login'); 
    }

    public function postLogin(Request $request)
    {
        $data = [
            'username' => $request->username,
            'password' => $request->password
        ];
 
        if (auth()->attempt($data)) {
            $token = auth()->user()->createToken('LaravelAuthApp')->accessToken;
            return redirect('/admin/dashboard');
        } else {
            return redirect('/login')->with('error','Username atau password salah!');
        }
    }

    public function destroy(Request $request)
    {
        $request->user()->token()->revoke();

        return redirect('login');
    }
}
