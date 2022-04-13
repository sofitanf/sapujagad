<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Administrator;
use App\Models\Masyarakat;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $user = User::where('username', $request->username)->first();

        if (!$user || $user->role === 'Masyarakat' ||!Hash::check($request->password, $user->password)) {
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

    public function masyarakatLogin(Request $request)
    {
        $user = User::where('role', 'Masyarakat')->where('username', $request->username)->first();

        if (!$user ||!Hash::check($request->password, $user->password)) {
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
        $id = Auth::user()->id_user;
        $user = User::where('id_user', $id)->first();
        if($user->role === 'Masyarakat') {
            $user = DB::table('masyarakat')
            ->join('users', 'users.id_user', '=', 'masyarakat.id_user')
            ->where('users.id_user', $id)
            ->select('masyarakat.*','users.role')->first();
        } else {
            $user =DB::table('administrator')
            ->join('users', 'users.id_user', '=', 'administrator.id_user')
            ->where('users.id_user', $id)
            ->select('administrator.*','users.role', 'users.avatar', 'users.username')->first();
        }

        return response()->json([
            'data' => $user
        ]);

    }
}
