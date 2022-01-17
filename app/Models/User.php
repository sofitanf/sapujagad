<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class User extends Authenticatable
{
    use  Notifiable, HasApiTokens, HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $table = 'users';
    protected $dates = ['deleted_at'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password'
    ];
 
    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function masyarakat()
     {
         return $this->hasOne(Masyarakat::class);
     }

    public function data()
    {
        return User::All()->where('role', '!=', 'Masyarakat')->except(Auth::id());
        // return DB::table('users')
        //     ->join('administrator', 'users.id' ,'=', 'administrator.user_id')
        //     ->select('users.id', 'users.role', 'users.email', 'administrator.nama')
        //     ->where('users.id', '!=', Auth::id())
        //     ->where('users.role', '!=', 'Masyarakat')
        //     ->get();
    }

    public function deleteUser($id)
    {
        return User::onlyTrashed()->where('id',$id)->forceDelete();
    }

    public function trash()
    {
    	return User::onlyTrashed()->get();
    }

    public function aktif($id)
    {
        return User::withTrashed()->find($id)->restore();
    }
}
