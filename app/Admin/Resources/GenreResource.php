<?php

namespace App\Admin\Resources;

use App\Admin\Resource;
use App\Admin\Fields\TextField;
use App\Admin\Fields\NumberField;
use App\Models\Book;
use App\Models\Genre;
use App\Models\User;

class GenreResource extends Resource
{
    protected static string $model = Genre::class;

    public function __construct()
    {
        $this->registerFields([
            TextField::make('name')->searchable()->sortable(),
            TextField::make('description')->searchable()->sortable(),
        ]);
    }
}
