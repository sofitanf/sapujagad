<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Administrator;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdministratorController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'unique:users',
        ],[
            'email.unique' => 'Email sudah terdaftar',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = new User();
        $user->role = $request->role;
        $user->email = $request->email;
        $user->password = bcrypt('rahasia'); 
        $user->save();

        $masyarakat = new Administrator();
        $masyarakat->nama = $request->nama;
        $masyarakat->user_id = $user->id;
        $masyarakat->bagian = $request->bagian;
        $masyarakat->save();

        return response()->json([
            'message' => 'User berhasil dibuat',
            'data' => $user
        ]);
    }
}
