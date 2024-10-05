<?php

namespace App\Action;

use App\Action\Action;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class TestAction extends Action
{
    public string $name = 'test';

    public function handle()
    {
        return response()->json([
            'success' => true
        ]);
    }
}
