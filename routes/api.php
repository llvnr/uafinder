<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Models\User;
use Illuminate\Support\Facades\Log;

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

Route::group([
    'prefix' => 'uafinder'
], function ($router) {

    Route::post("/useragent", function() {

        $user_agent = $_SERVER['HTTP_USER_AGENT'];

        Log::info("[UAFinder] - Le service a été solliciter pour obtenir un user agent.");

        return response()->json($user_agent);

    });

});