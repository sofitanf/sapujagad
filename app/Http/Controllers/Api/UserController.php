<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class UserController extends Controller
{ 
    public function index(User $user)
    {
        return response()->json([
            'data' => $user->data()
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'unique:users',
            'username' => 'unique:users',
        ],[
            'email.unique' => 'email sudah terdaftar',
            'username.unique' => 'username sudah terdaftar',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = new User;
        $user->role = $request->role;
        $user->nama = $request->nama;
        $user->username = $request->username;
        $user->bagian = $request->bagian;
        $user->email = $request->email;
        $user->password = bcrypt('rahasia'); 
        $user->save();

        return response()->json([
            'message' => 'User berhasil dibuat!',
            'data' => $user
        ]);
    }

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'unique:users|email|required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $id = auth()->user()->id;
        $user =  User::findOrFail($id);

        $user->email=$request->get('email');
        $user->save();

        return response()->json([
            'message' => 'Profil berhasil diperbaharui!',
            'data' => $user->email
        ]);
    }

    public function updatePassword(Request $request)
    {
        $id = auth()->user()->id;
        $user =  User::find($id);

        $user->password = bcrypt($request->password_baru); 
        $user->save();

        return response()->json([
            'message' => 'Kata sandi berhasil diperbaharui!',
            'data' => $user->password
        ]);
    }

    public function updateAvatar(Request $request)
    {
        $id = auth()->user()->id;
        $user =  User::find($id);

        if($request->input('avatar')){
            $file_data = $request->input('avatar'); 
            $file_name = Str::random(10).'.png'; //generating unique file name; 
            @list($type, $file_data) = explode(';', $file_data);
            @list(, $file_data) = explode(',', $file_data); 
            if($file_data!=""){ // storing image in storage/app/public Folder 
                Storage::disk('public')->put('/avatar/'.$file_name,base64_decode($file_data)); 
                $user->avatar = $file_name;
                $user->save();
            }
        }

        return response()->json([
            'message' => 'Avatar berhasil diperbaharui!',
            'data' => $user->avatar
        ]);
    }

    public function destroy($id)
    {
        $data = User::find($id);
        
        if($data->avatar) {
            Storage::disk('public')->delete('/avatar/'.$data->avatar);
         }

        $data->delete();

        return response()->json([
            'message' => 'User berhasil dihapus!',
        ]);
    }

    public function deleteAvatar()
    {
        $id = auth()->user()->id;
        $data = User::find($id);
        
        if($data->avatar) {
            Storage::disk('public')->delete('/avatar/'.$data->avatar);
         }
        
        $data->avatar = null;
        $data->save();

        return response()->json([
            'message' => 'Avatar berhasil dihapus!',
        ]);
    }
}
