<?php

namespace App\Http\Controllers\Api;

use App\Events\RefreshData;
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
            'username' => 'unique:users|required',
            'password' => 'required',
            'nama' => 'required',
            'telepon' => 'unique:masyarakat|required',
            'nik' => 'unique:masyarakat|required',
        ],[
            'username.unique' => 'Username sudah terdaftar',
            'telepon.unique' => 'Nomor hp sudah terdaftar',
            'nik.unique' => 'NIK sudah terdaftar',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = new User(); 
        $user->role = 'Masyarakat';
        $user->username = $request->username;
        $user->password = bcrypt($request->password); 
        $user->save();

        $masyarakat = new Masyarakat();
        $masyarakat->nama = $request->nama;
        $masyarakat->nik = $request->nik;
        $masyarakat->telepon = $request->telepon;
        $masyarakat->id_user = $user->id_user;
        $masyarakat->save();

        broadcast(new RefreshData());

        return response()->json([
            'message' => 'User berhasil dibuat'
        ]);
    }
}
