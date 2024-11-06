<?php

namespace App\Admin\Resources;

use App\Admin\Resource;
use App\Admin\Fields\InputField;
use App\Admin\Fields\NumberField;
use App\Models\Author;
use App\Models\Book;
use App\Models\Genre;
use App\Models\User;

class AuthorResource extends Resource
{
    protected static string $model = Author::class;

    public function __construct()
    {
        $this->registerFields([
            InputField::make('name')->searchable()->sortable(),
        ]);
    }
}
