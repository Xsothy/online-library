<?php

namespace App\Admin\Resources;

use App\Admin\Resource;
use App\Admin\Fields\TextField;
use App\Models\User;

class UserResource extends Resource
{
    protected static string $model = User::class;

    public function __construct()
    {
        $this->registerFields([
            TextField::make('name')->searchable()->sortable(),
            TextField::make('email')->searchable()->sortable(),
            TextField::make('kycStatus')->default('pending')->sortable(),
        ]);
    }
}
