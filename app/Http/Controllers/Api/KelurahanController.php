<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\KelurahanResource;
use App\Models\Kelurahan;
use Illuminate\Http\Request;

class KelurahanController extends Controller
{
    public function __invoke(Kelurahan $kelurahan, $id)
    {
        $data = $kelurahan->data($id);

        return response()->json([
            'data' => KelurahanResource::collection($data)
        ]);
    }
}
