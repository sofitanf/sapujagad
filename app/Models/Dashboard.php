<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB; 

class Dashboard extends Model
{
    use HasFactory;

    private function objek($data){
        return DB::table('pengajuan')
        ->select($data, DB::raw('count(*) as total'))
        ->groupBy($data)
        ->pluck('total')
        ->count();
    }

    public function pelapor(){
        return $this->objek('user_id');
    }

    public function pemohon(){
        return $this->objek('nik');
    }

    private function status($data){
        return DB::table('pengajuan')
        ->where('status', $data)
        ->count();
    }

    public function terkirim(){
        return $this->status('Terkirim');
    }

    public function diproses(){
        return $this->status('Diproses');
    }

    public function jadwal()
    {
        return DB::table('pengajuan')
            ->join('kecamatan', 'pengajuan.kecamatan_id', '=', 'kecamatan.id')
            ->select('pengajuan.id','kecamatan.nama_kecamatan','pengajuan.jadwal','pengajuan.kategori')
            ->where('pengajuan.status', 'diproses')
            ->orderBy('pengajuan.jadwal', 'ASC')
            ->get();
    }

    public function tabelKecamatan()
    {
        return DB::table('pengajuan')
            ->join('kecamatan', 'pengajuan.kecamatan_id', '=', 'kecamatan.id')
            ->addSelect('kecamatan.nama_kecamatan')
            ->addSelect(DB::raw('COUNT(kecamatan.nama_kecamatan) as total'))
            ->addSelect(DB::raw("COUNT(CASE WHEN pengajuan.kategori = 'Cetak KTP-El' THEN 1 END) as cetakKtp"))
            ->addSelect(DB::raw("COUNT(CASE WHEN pengajuan.kategori = 'Rekam KTP-El' THEN 1 END) as rekamKtp"))
            ->addSelect(DB::raw("COUNT(CASE WHEN pengajuan.kategori = 'KIA' THEN 1 END) as kia"))
            ->addSelect(DB::raw("COUNT(CASE WHEN pengajuan.kategori = 'AKTA' THEN 1 END) as akta"))
            ->groupBy('kecamatan.nama_kecamatan')
            ->get();
    }

    public function tahun() {
       return DB::table('pengajuan')
                ->addSelect(DB::raw("Year(created_at) tahun"))
                ->groupBy('tahun')
                ->get();
    }
 
    public function chart($tahun)
    {
        return Pengajuan::whereYear('created_at', $tahun)
               ->select(DB::raw("Month(created_at) bulan"), 
                        DB::raw("COUNT(CASE WHEN pengajuan.kategori = 'Cetak KTP-El' THEN 1 END) as cetakKtp"),
                        DB::raw("COUNT(CASE WHEN pengajuan.kategori = 'Rekam KTP-El' THEN 1 END) as rekamKtp"),
                        DB::raw("COUNT(CASE WHEN pengajuan.kategori = 'KIA' THEN 1 END) as kia"),
                        DB::raw("COUNT(CASE WHEN pengajuan.kategori = 'AKTA' THEN 1 END) as akta"),
                        )
                ->groupby('bulan')
                ->get();
    }

    public function chartCetakKtp()
    {
        return $this->chart('Cetak KTP-El');
    }

    public function chartRekamKtp()
    {
        return $this->chart('Rekam KTP-El');
    }

    public function chartKia()
    {
        return $this->chart('KIA');
    }

    public function chartAkta()
    {
        return $this->chart('AKTA');
    }
}
