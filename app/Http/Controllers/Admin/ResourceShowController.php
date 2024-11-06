<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ResourceShowController extends Controller
{
    public function __invoke(Request $request)
    {
        return response()->json([
            'foo' => 'bar'
        ]);
    }
}