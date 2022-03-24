<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Kelurahan extends Model
{
    use HasFactory;

    protected $table = 'kelurahan';
    protected $primaryKey = 'id_kelurahan';

    public function data($kec)
    {
        return DB::table('kelurahan')
        ->where('id_kecamatan', $kec)
        ->get(); 
    }
}
