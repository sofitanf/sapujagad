<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
 
class JadwalResource extends JsonResource
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
            'title' => TanggalID("H:i", $this->jadwal).' '.$this->kategori.' '.$this->nama_kecamatan,
            'date' => TanggalID("Y-m-d" ,$this->jadwal)
        ];
    }
}
