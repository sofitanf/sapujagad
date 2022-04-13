<?php

use Illuminate\Support\Facades\Route;

Route::get('/admin/{any}', function () {
    return view('admin');
})->where('any', '.*');

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');


