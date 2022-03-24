<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Masyarakat;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MasyarakatController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'unique:users|required',
            'password' => 'required',
            'nama' => 'required',
            'telepon' => 'unique:masyarakat|required',
            'nik' => 'unique:masyarakat|required',
        ],[
            'email.unique' => 'Email sudah terdaftar',
            'telepon.unique' => 'Telepon sudah terdaftar',
            'nik.unique' => 'NIK sudah terdaftar',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = new User();
        $user->role = 'Masyarakat';
        $user->email = $request->email;
        $user->password = bcrypt($request->password); 
        $user->save();

        $masyarakat = new Masyarakat();
        $masyarakat->nama = $request->nama;
        $masyarakat->nik = $request->nik;
        $masyarakat->telepon = $request->telepon;
        $masyarakat->id_user = $user->id_user;
        $masyarakat->save();

        return response()->json([
            'message' => 'User berhasil dibuat'
        ]);
    }
}
