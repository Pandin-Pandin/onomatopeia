<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OnomatopeiasController;

Route::get('/', [OnomatopeiasController::class, 'index']);

Route::get('/list', [OnomatopeiasController::class, 'getList']);
Route::post('/list', [OnomatopeiasController::class, 'saveData'])->name('getList');