<?php

namespace App\Http\Controllers\Api;

use App\Events\PengajuanUpdate;
use App\Events\RefreshData;
use App\Http\Controllers\Controller;
use App\Http\Resources\CekPengajuanResource;
use App\Mail\PostMail;
use App\Models\Pengajuan;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use PDF;

class PengajuanController extends Controller
{
    public function total(Pengajuan $pengajuan)
    {
        return response()->json([
            'cetakKTP' => $pengajuan->cetakKTP(),
            'rekamKTP' => $pengajuan->rekamKTP(),
            'kia' => $pengajuan->kia(),
            'akta' => $pengajuan->akta(),
        ]);
    }

    public function totalAll(Pengajuan $pengajuan)
    {
        return response()->json([
            'data' => $pengajuan->total()
        ]);
    }

    public function cekPengajuan($id)
    {
        $data = Pengajuan::where('id_masyarakat', $id)->get();

        return response()->json([
            'data' => CekPengajuanResource::collection($data),
        ]);
    } 

    public function pengajuan(Pengajuan $pengajuan)
    {
        return response()->json([
            'data' => $pengajuan->pengajuan()
        ]);
    }

    private function upload($request, $file, $pengajuan)
    {
        if($request->input($file)){
            $file_data = $request->input($file); 
            $file_name = Str::random(10).'.png'; 
            @list($type, $file_data) = explode(';', $file_data);
            @list(, $file_data) = explode(',', $file_data); 
            if($file_data!=""){ 
                Storage::disk('public')->put('/pengajuan/'.$file_name,base64_decode($file_data)); 
                $pengajuan->$file = $file_name;
                $pengajuan->save();
            }
        }
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nik' => 'numeric|digits:16|required',
            'nama' => 'regex:/^[\pL\s\-]+$/u|required',
            'id_masyarakat' => 'required',
            'ibu' => 'regex:/^[\pL\s\-]+$/u',
            'ayah' => 'regex:/^[\pL\s\-]+$/u',
            'alamat' => 'required',
            'id_kecamatan' => 'required',
            'id_kelurahan' => 'required',
            'kategori' => 'required',
            'hubungan' => 'required',
            'pernyataan' => 'required',
			'lampiran1' => 'required',
        ]);

        $onProcess = DB::table('pengajuan')->where('nik', $request->nik)
                        ->where('kategori', $request->kategori)->where(function($query) {
                            $query->where('status', 'Terkirim')
                                ->orWhere('status', 'Diproses');
                        })->get();

        $rekam = DB::table('pengajuan')->where('nik', $request->nik)
                    ->where('kategori', 'Rekam KTP-El')
                    ->where('status', 'Selesai')
                    ->get();

        $countOnProcess = count($onProcess);
        $countRekam = count($rekam);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        } else {
            if($countOnProcess < 1 && $countRekam < 1) {
                $pengajuan = Pengajuan::create([
                    'nik' => $request->nik,
                    'nama' => $request->nama,
                    'id_masyarakat' => $request->id_masyarakat,
                    'alamat' => $request->alamat,
                    'ibu' => $request->ibu,
                    'ayah' => $request->ayah,
                    'id_kecamatan' => $request->id_kecamatan,
                    'id_kelurahan' => $request->id_kelurahan,
                    'kategori' => $request->kategori,
                    'hubungan' => $request->hubungan,
                    'status' => 'Terkirim',
                    'kecacatan' => $request->kecacatan,
                    'lansia' => $request->lansia,
                    'pernyataan' => $request->pernyataan,
                ]);
        
                $this->upload($request, 'lampiran1', $pengajuan);
                $this->upload($request, 'lampiran2', $pengajuan);
                $this->upload($request, 'lampiran3', $pengajuan);
                $this->upload($request, 'lampiran4', $pengajuan);
                $this->upload($request, 'lampiran5', $pengajuan);
        
                // $emails = DB::table('users')
                //             ->where('role', 'Petugas')
                //             ->select('email')
                //             ->get();
        
                // Mail::to($emails)->send(new PostMail());
                broadcast(new RefreshData());
                
                return response()->json([
                    'message' => 'Pengajuan berhasil dibuat',
                    'data' => $pengajuan,
                ]);
            } else {
                return response()->json([
                    'message' => 'Pengajuan sudah ada',
                ], 400);
            }
        }
    }

    public function pengajuanDetail(Pengajuan $pengajuan, $id)
    {
        $data = $pengajuan->pengajuanDetail($id);

        return response()->json([
            'data' => $data
        ]);
    } 

    public function update(User $user ,Request $request, $id)
    {
        $this->authorize('petugas', $user);

        $validator = Validator::make($request->all(), [
            'status' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        } else {
            $data = Pengajuan::findOrFail($id);
            $data->status=$request->get('status');
            $data->catatan=$request->get('catatan');
            $data->jadwal=$request->get('jadwal');
            $data->id_administrator = $request->get('id_administrator');
            $data->nama_administrator = $request->get('nama_administrator');
            $data->bagian_administrator = $request->get('bagian_administrator');
            $data->save();
            
            $userData = DB::table('users')
            ->join('masyarakat', 'masyarakat.id_user', '=', 'users.id_user')
            ->where('masyarakat.id_masyarakat', $data->id_masyarakat)
            ->select('users.id_user')
            ->first();
            // var_dump($id_user);
            broadcast(new PengajuanUpdate($data, $userData->id_user))->toOthers();

            return response()->json([
                'message' => 'Pengajuan berhasil diupdate!',
                'data' => $data
            ]);
        }
    }

    private function laporanKategori($start, $end, $kategori)
    {
        return DB::table('pengajuan')
                    ->where('kategori', $kategori)
                    ->whereBetween('created_at', [$start, $end])
                    ->count();
    }

    private function jumlahMasyarakat($start, $end, $kategori)
    {
        return DB::table('pengajuan')
            		->select($kategori, DB::raw('count(*) as total'))
                    ->whereBetween('created_at', [$start, $end])
	            	->groupBy($kategori)
	                ->pluck('total')
	                ->count();
    }


    public function laporan($daterange, Pengajuan $pengajuan)
    {
        $date = explode('+', $daterange);
        $start = $date[0];
        $end = $date[1];

        $kecamatan = DB::table('pengajuan')
                    ->join('kecamatan', 'pengajuan.id_kecamatan', '=', 'kecamatan.id_kecamatan')
                    ->addSelect('kecamatan.nama_kecamatan')
                    ->addSelect(DB::raw('COUNT(kecamatan.nama_kecamatan) as total'))
                    ->addSelect(DB::raw("COUNT(CASE WHEN pengajuan.kategori = 'Cetak KTP-El' THEN 1 END) as cetakKtp"))
                    ->addSelect(DB::raw("COUNT(CASE WHEN pengajuan.kategori = 'Rekam KTP-El' THEN 1 END) as rekamKtp"))
                    ->addSelect(DB::raw("COUNT(CASE WHEN pengajuan.kategori = 'KIA' THEN 1 END) as kia"))
                    ->addSelect(DB::raw("COUNT(CASE WHEN pengajuan.kategori = 'AKTA' THEN 1 END) as akta"))
                    ->whereBetween('pengajuan.created_at', [$start, $end])
                    ->groupBy('kecamatan.nama_kecamatan')
                    ->get();
        
        $total = DB::table('pengajuan')
                ->whereBetween('created_at', [$start, $end])
                ->count();

        $cetakKtp = $this->laporanKategori($start, $end, 'Cetak KTP-El');
        $rekamKtp = $this->laporanKategori($start, $end, 'Rekam KTP-El');
        $kia = $this->laporanKategori($start, $end, 'KIA');
        $akta = $this->laporanKategori($start, $end, 'AKTA');

        $pelapor = $this->jumlahMasyarakat($start, $end, 'id_masyarakat');
        $pemohon = $this->jumlahMasyarakat($start, $end, 'nik');

        $start = TanggalID("j M Y", $start);
        $end = TanggalID("j M Y", $end);


        $pdf = PDF::loadView('laporan', compact('kecamatan' ,'start', 'end', 'total', 'pelapor', 'pemohon', 'cetakKtp', 'rekamKtp', 'kia', 'akta'));
        return $pdf->stream('Laporan Sapu Jagad Bulan'. $start.' - '. $end);
    }
}
