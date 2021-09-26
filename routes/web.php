<?php

use App\Http\Controllers\Api\PengajuanController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/laporan/{daterange}', [PengajuanController::class, 'laporan']);

Route::get('/admin/{any}', function () {
    return view('admin');
})->where('any', '.*');

Route::get('/login', function () {
    return view('login');
});

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');


