<?php

use App\Http\Controllers\Api\AdministratorController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\KecamatanController;
use App\Http\Controllers\Api\KelurahanController;
use App\Http\Controllers\Api\MasyarakatController;
use App\Http\Controllers\Api\PengajuanController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/login', [AuthController::class, 'login']);
Route::post('/login-user', [AuthController::class, 'masyarakatLogin']);
Route::post('/registrasi', [MasyarakatController::class, 'store']);

Route::get('/pengajuan/total', [PengajuanController::class, 'total']);

Route::group(['middleware'=>['auth:api']],function(){
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/userLogin', [AuthController::class, 'user']);
    Route::get('/cek-pengajuan/{id}', [PengajuanController::class, 'cekPengajuan']);
    Route::post('/pengajuan', [PengajuanController::class, 'create']);
    Route::get('/kecamatan', KecamatanController::class);
    Route::get('/kelurahan/{id}', KelurahanController::class);
    Route::get('/pengajuan/totalAll', [PengajuanController::class, 'totalAll']);
    Route::get('/dashboard/chart/{tahun}', [DashboardController::class, 'chart']);
    Route::get('/dashboard/tahun', [DashboardController::class, 'tahun']);
    Route::get('/dashboard/total', [DashboardController::class, 'total']);
    Route::get('/dashboard/jadwal', [DashboardController::class, 'jadwal']);
    Route::get('/dashboard/tabel-kecamatan', [DashboardController::class, 'tabelKecamatan']);
    Route::get('/pengajuan', [PengajuanController::class, 'pengajuan']);
    Route::get('/pengajuan/{id}', [PengajuanController::class, 'pengajuanDetail']);
    // Route::delete('/pengajuan/{id}', [PengajuanController::class, 'destroy']);
    Route::patch('/pengajuan/{id}', [PengajuanController::class, 'update']);
    Route::get('/user', [UserController::class, 'index']);
    Route::post('/user', [AdministratorController::class, 'store']);
    Route::get('/user/trash', [UserController::class, 'trash']);
    Route::get('/user/restore/{id}', [UserController::class, 'restore']);
    Route::patch('/user', [UserController::class, 'update']);
    Route::put('/user/password', [UserController::class, 'updatePassword']);
    Route::delete('/user/{id}', [UserController::class, 'destroy']);
    Route::delete('/user/delete/{id}', [UserController::class, 'delete']);
    Route::delete('/deleteAvatar', [UserController::class, 'deleteAvatar']);
    Route::put('/updateAvatar', [UserController::class, 'updateAvatar']);
});


