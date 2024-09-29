<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('app'); // Replace 'app' with the name of your main React view
})->where('any', '.*');