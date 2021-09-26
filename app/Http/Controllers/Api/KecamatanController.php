<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\KecamatanResource;
use App\Models\Kecamatan;
use Illuminate\Http\Request;

class KecamatanController extends Controller
{
    public function __invoke(Kecamatan $kecamatan)
    {
        $data = $kecamatan->data();

        return response()->json([
            'data' => KecamatanResource::collection($data)
        ]);
    }
}
