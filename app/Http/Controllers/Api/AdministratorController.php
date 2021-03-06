<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Administrator;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AdministratorController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'unique:users|required',
            'email' => 'unique:users|required',
            'nama' => 'required',
            'role' => 'required',
            'bagian' => 'required'

        ],[
            'username.unique' => 'Username sudah terdaftar', 
            'email.unique' => 'Email sudah terdaftar', 
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = new User();
        $user->role = $request->role;
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = bcrypt('rahasia'); 
        $user->save();

        $masyarakat = new Administrator();
        $masyarakat->nama = $request->nama;
        $masyarakat->id_user = $user->id_user;
        $masyarakat->bagian = $request->bagian;
        $masyarakat->save();

        return response()->json([
            'message' => 'User berhasil dibuat',
            'data' => $user
        ]);
    }

    public function index(User $user)
    {
        $this->authorize('admin', $user);
        return response()->json([
            'data' => $user->data()
        ]);
    }

    public function trash(User $user)
    {
        $this->authorize('admin', $user);

        return response()->json([
            'data' => $user->trash()
        ]);
    }

    public function restore($id, User $user)
    {
        $this->authorize('admin', $user);

        return response()->json([
            'data' =>$user->aktif($id)
        ]);
    }


    public function delete($id)
    {
        $data = User::find($id);
        $data->delete();

        return response()->json([
            'message' => 'User berhasil dinonaktifkan!',
        ]);
    }

    public function destroy($id)
    {
        $data = User::onlyTrashed()->where('id_user',$id);

        $user = User::find($id);
        $administrator = Administrator::where('id_user', $id);
        
        if(optional($user)->avatar) {
            Storage::disk('public')->delete('/avatar/'.$user->avatar);
        }
        $data->forceDelete();
        $administrator->delete();

        return response()->json([
            'message' => 'User berhasil dihapus!',
        ]);
    }

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'unique:users|required',
        ]); 

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
 
        $id = auth()->user()->id_user;
        $user =  User::findOrFail($id);

        $user->username=$request->get('username');
        $user->save();

        return response()->json([
            'message' => 'Username berhasil diperbaharui!',
            'data' => $user->username
        ]);
    }

    public function updatePassword(Request $request)
    {
        $id = auth()->user()->id_user;
        $user = User::find($id);

        $user->password = bcrypt($request->password_baru); 
        $user->save();

        return response()->json([
            'message' => 'Kata sandi berhasil diperbaharui!',
            'data' => $user->password
        ]);
    }

    public function updateAvatar(Request $request)
    {
        $id = auth()->user()->id_user;
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

    public function deleteAvatar()
    {
        $id = auth()->user()->id_user;
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
