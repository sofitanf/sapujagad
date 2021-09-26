<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\This;

class Pengajuan extends Model
{
    use HasFactory; 

    protected $table = 'pengajuan';
    protected $guarded = [];

    public function total()
    {
        return DB::table('pengajuan')
                ->count();
    }

    private function totalJenis($jenis)
    {
        return DB::table('pengajuan')
             ->where('kategori', $jenis) 
             ->count();
    } 

    public function cetakKTP()
    {
        return $this->totalJenis('Cetak KTP-El');
    }

    public function rekamKTP()
    {
        return $this->totalJenis('Rekam KTP-El');
    }

    public function kia()
    {
        return $this->totalJenis('KIA');
    }

    public function akta()
    {
        return $this->totalJenis('AKTA');
    }

    public function cekPengajuan($nik)
    {
        return DB::table('pengajuan')
            ->where('nik_pelapor', $nik) 
            ->get();
    }

    public function pengajuan()
    {
        return DB::table('pengajuan')
            ->join('kecamatan', 'pengajuan.kecamatan', '=', 'kecamatan.id')
            ->join('kelurahan', 'pengajuan.kelurahan', '=', 'kelurahan.id')
            ->select('pengajuan.id','kecamatan.nama_kecamatan', 'kelurahan.nama_kelurahan', 
                    'pengajuan.nik', 'pengajuan.nama', 'pengajuan.nama_pelapor', 'pengajuan.kategori',
                    'pengajuan.status', 'pengajuan.created_at')
            ->orderBy('created_at', 'DESC')
            ->get(); 
    }

    public function pengajuanDetail($id)
    {
        return DB::table('pengajuan')
            ->join('kecamatan', 'pengajuan.kecamatan', '=', 'kecamatan.id')
            ->join('kelurahan', 'pengajuan.kelurahan', '=', 'kelurahan.id')
            ->where('pengajuan.id', $id)
            ->select('pengajuan.*','kecamatan.nama_kecamatan', 'kelurahan.nama_kelurahan')
            ->first();
    }

}
