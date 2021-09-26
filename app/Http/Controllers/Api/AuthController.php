<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $user = User::where('username', $request->username)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return  response()->json([ 
                'errors' => [
                    'msg' => ['Username atau password tidak valid!.']
                ]  
            ], 401);
        }

        return response()->json([
            'message' => 'Login Success!',
            'token'   => $user->createToken('LaravelAuthApp')->accessToken  
        ]);
    }

    public function logout(Request $request)
    {
        $removeToken = $request->user()->tokens()->delete();

        if($removeToken) {
            return response()->json([
                'success' => true,
                'message' => 'Logout Success!',  
            ]);
        }
    }

    public function user()
    {
        $user = User::find(Auth::user()->id);

        return response()->json([
            'data' => $user
        ]);

    }
}
