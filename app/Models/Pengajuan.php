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
    protected $primaryKey = 'id_pengajuan';

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

    public function cekPengajuan($id) 
    {
        return DB::table('pengajuan')
            ->where('id_masyarakat', $id) 
            ->get();
    }

    public function pengajuan()
    {
        return DB::table('pengajuan')
            ->join('kecamatan', 'pengajuan.id_kecamatan', '=', 'kecamatan.id_kecamatan')
            ->join('kelurahan', 'pengajuan.id_kelurahan', '=', 'kelurahan.id_kelurahan')
            ->join('masyarakat', 'pengajuan.id_masyarakat', '=', 'masyarakat.id_masyarakat')
            ->select('pengajuan.id_pengajuan','kecamatan.nama_kecamatan', 'kelurahan.nama_kelurahan', 
                    'pengajuan.nik', 'pengajuan.nama', 'masyarakat.nama as nama_pelapor' , 'pengajuan.kategori',
                    'pengajuan.status', 'pengajuan.created_at')
            ->orderBy('created_at', 'DESC')
            ->get(); 
    }

    public function pengajuanDetail($id)
    {
        return DB::table('pengajuan')
            ->join('kecamatan', 'pengajuan.id_kecamatan', '=', 'kecamatan.id_kecamatan')
            ->join('kelurahan', 'pengajuan.id_kelurahan', '=', 'kelurahan.id_kelurahan')
            ->join('masyarakat', 'masyarakat.id_masyarakat', '=', 'pengajuan.id_masyarakat')
            ->where('pengajuan.id_pengajuan', $id)
            ->select('pengajuan.*','kecamatan.nama_kecamatan', 'kelurahan.nama_kelurahan', 'masyarakat.nama as nama_pelapor', 
                    'masyarakat.nik as nik_pelapor', 'masyarakat.telepon as telepon')
            ->first();
    }

}
