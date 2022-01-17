<?php

namespace App\Http\Controllers\Api;

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
        $data = Pengajuan::where('user_id', $id)->get();

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
            'ibu' => 'regex:/^[\pL\s\-]+$/u',
            'ayah' => 'regex:/^[\pL\s\-]+$/u',
            'alamat' => 'required',
            'kecamatan_id' => 'required',
            'kelurahan_id' => 'required',
            'kategori' => 'required',
            'hubungan' => 'required',
            'pernyataan' => 'required',
			'lampiran1' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        } else {
            $pengajuan = Pengajuan::create([
                'nik' => $request->nik,
                'nama' => $request->nama,
                'user_id' => $request->user_id,
                'alamat' => $request->alamat,
                'ibu' => $request->ibu,
                'ayah' => $request->ayah,
                'kecamatan_id' => $request->kecamatan_id,
                'kelurahan_id' => $request->kelurahan_id,
                'kategori' => $request->kategori,
                'hubungan' => $request->hubungan,
                'status' => 'Terkirim',
                'jadwal' => $request->jadwal,
                'kecacatan' => $request->kecacatan,
                'lansia' => $request->lansia,
                'pernyataan' => $request->pernyataan,
            ]);
    
            $this->upload($request, 'lampiran1', $pengajuan);
            $this->upload($request, 'lampiran2', $pengajuan);
            $this->upload($request, 'lampiran3', $pengajuan);
            $this->upload($request, 'lampiran4', $pengajuan);
    
            $emails = DB::table('users')
                        ->where('role', 'Petugas')
                        ->select('email')
                        ->get();
    
            Mail::to($emails)->send(new PostMail());
    
            return response()->json([
                'message' => 'Pengajuan berhasil dibuat',
                'data' => $pengajuan
            ]);
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

        $data = Pengajuan::findOrFail($id);
        $data->status=$request->get('status');
        $data->catatan=$request->get('catatan');
        $data->jadwal=$request->get('jadwal');
        $data->petugas_id = $request->get('petugas_id');
        $data->nama_petugas = $request->get('nama_petugas');
        $data->bagian_petugas = $request->get('bagian_petugas');
        $data->save();

        return response()->json([
            'message' => 'Pengajuan berhasil diupdate!',
            'data' => $data
        ]);
    }

    // private function deleteImage($file)
    // {
    //     if($file) {
    //        Storage::disk('public')->delete('/pengajuan/'.$file);
    //     }
    // }

    // public function destroy($id)
    // {
    //     $data = Pengajuan::find($id);

    //     $this->deleteImage($data->lampiran1);
    //     $this->deleteImage($data->lampiran2);
    //     $this->deleteImage($data->lampiran3);
    //     $this->deleteImage($data->lampiran4);

    //     $data->delete();

    //     return response()->json([
    //         'message' => 'Pengajuan berhasil dihapus!',
    //     ]);
    // }

    private function laporanKategori($start, $end, $kategori)
    {
        return DB::table('pengajuan')
                    ->where('kategori', $kategori)
                    ->whereBetween('created_at', [$start, $end])
                    ->count();
    }

    private function client($start, $end, $kategori)
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
                    ->join('kecamatan', 'pengajuan.kecamatan_id', '=', 'kecamatan.id')
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

        $pelapor = $this->client($start, $end, 'user_id');
        $pemohon = $this->client($start, $end, 'nik');

        $start = TanggalID("j M Y", $start);
        $end = TanggalID("j M Y", $end);


        $pdf = PDF::loadView('laporan', compact('kecamatan' ,'start', 'end', 'total', 'pelapor', 'pemohon', 'cetakKtp', 'rekamKtp', 'kia', 'akta'));
        return $pdf->stream('Laporan Sapu Jagad Bulan'. $start.' - '. $end);
    }
}
