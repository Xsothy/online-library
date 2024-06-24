<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index(Request $request, ?string $resource = null, ?string $action = null, ?string $id = null)
    {
        return Inertia::render('Admin', [
            'resource' => $resource,
            'action' => $action,
            'id' => $id,
        ]);
    }
}
