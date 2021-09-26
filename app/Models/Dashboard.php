<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class Dashboard extends Model
{
    use HasFactory;

    private function subjek($data)
    {
        return DB::table('pengajuan')
        ->select($data, DB::raw('count(*) as total'))
        ->groupBy($data)
        ->pluck('total')
        ->count();
    }

    public function pelapor()
    {
        return $this->subjek('nik_pelapor');
    }

    public function pemohon()
    {
        return $this->subjek('nik');
    }

    private function status($data)
    {
        return DB::table('pengajuan')
        ->where('status', $data)
        ->count();
    }

    public function terkirim()
    {
        return $this->status('terkirim');
    }

    public function diproses()
    {
        return $this->status('diproses');
    }

    // private function jadwal($data)
    // {
    //     return DB::table('pengajuan')
    //     ->join('kecamatan', 'pengajuan.kecamatan', '=', 'kecamatan.id')
    //     ->join('kelurahan', 'pengajuan.kelurahan', '=', 'kelurahan.id')
    //     ->where('pengajuan.status', 'diproses')
    //     ->whereDate('pengajuan.jadwal', $data)
    //     ->orderBy('pengajuan.jadwal', 'ASC')
    //     ->select('pengajuan.id','pengajuan.alamat', 'kecamatan.nama_kecamatan', 'kelurahan.nama_kelurahan','pengajuan.jadwal')
    //     ->get();
    // }

    // public function jadwal_hari_ini()
    // {
    //     return $this->jadwal(date('Y-m-d'));
    // }

    // public function jadwal_besok() 
    // {
    //     return $this->jadwal(Carbon::tomorrow());
    // }

    public function jadwal()
    {
        return DB::table('pengajuan')
            ->join('kecamatan', 'pengajuan.kecamatan', '=', 'kecamatan.id')
            ->select('pengajuan.id','kecamatan.nama_kecamatan','pengajuan.jadwal','pengajuan.kategori')
            ->where('pengajuan.status', 'diproses')
            ->orderBy('pengajuan.jadwal', 'ASC')
            ->get();
    }

    public function tabelKecamatan()
    {
        return DB::table('pengajuan')
            ->join('kecamatan', 'pengajuan.kecamatan', '=', 'kecamatan.id')
            ->addSelect('kecamatan.nama_kecamatan')
            ->addSelect(DB::raw('COUNT(kecamatan.nama_kecamatan) as total'))
            ->addSelect(DB::raw("COUNT(CASE WHEN pengajuan.kategori = 'Cetak KTP-El' THEN 1 END) as cetakKtp"))
            ->addSelect(DB::raw("COUNT(CASE WHEN pengajuan.kategori = 'Rekam KTP-El' THEN 1 END) as rekamKtp"))
            ->addSelect(DB::raw("COUNT(CASE WHEN pengajuan.kategori = 'KIA' THEN 1 END) as kia"))
            ->addSelect(DB::raw("COUNT(CASE WHEN pengajuan.kategori = 'AKTA' THEN 1 END) as akta"))
            ->groupBy('kecamatan.nama_kecamatan')
            ->get();
    }

    public function bulan()
    {
        return Pengajuan::whereYear('created_at', Carbon::now()->year)
                ->select(DB::raw("(created_at) bulan"))
                ->get();
    }

    public function chart()
    {
        return Pengajuan::whereYear('created_at', Carbon::now()->year)
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
