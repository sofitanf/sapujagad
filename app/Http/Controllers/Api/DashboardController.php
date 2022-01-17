<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\JadwalResource;
use App\Models\Dashboard;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function total(Dashboard $dashboard)
    {
        return response()->json([
            'terkirim' => $dashboard->terkirim(),
            'diproses' => $dashboard->diproses(),
            'pemohon' => $dashboard->pemohon(),
            'pelapor' => $dashboard->pelapor(),
        ]);
    }

    public function jadwal(Dashboard $dashboard)
    {
        $data = $dashboard->jadwal(); 

        return response()->json([
            'data' => JadwalResource::collection($data)
        ]);
    }

    public function tabelKecamatan(Dashboard $dashboard)
    {
        return response()->json([
            'data' => $dashboard->tabelKecamatan()
        ]);
    }

    public function chart(Dashboard $dashboard, $tahun)
    {
        return response()->json([
            'chart' => $dashboard->chart($tahun),
        ]);
    }

    public function tahun(Dashboard $dashboard)
    {
        return response()->json([
            'data' => $dashboard->tahun(),
        ]);
    }
}
