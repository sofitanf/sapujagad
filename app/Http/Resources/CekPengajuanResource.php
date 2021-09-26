<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource; 

class CekPengajuanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nama' => $this->nama,
            'kategori' => $this->kategori,
            'status' => $this->status,
            'tgl_pengajuan' => $this->created_at,
            'jadwal' => $this->jadwal,
            'catatan' => $this->catatan,
        ];
    }
}
