<?php

namespace App\Http\Controllers\Admin;

use App\Admin\AdminPanel;
use App\Admin\Resources\UserResource;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Context;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $adminPanel = app(AdminPanel::class);
        return $adminPanel->toResponse();
    }
}
