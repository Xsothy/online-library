<?php

namespace App\Admin\Resources;

use App\Admin\Resource;
use App\Admin\Fields\InputField;
use App\Models\User;

class UserResource extends Resource
{
    protected static string $model = User::class;

    public function __construct()
    {
        $this->registerFields([
            InputField::make('name')->searchable()->sortable(),
            InputField::make('email')->searchable()->sortable(),
            InputField::make('kycStatus')->default('pending')->sortable(),
        ]);
    }
}
