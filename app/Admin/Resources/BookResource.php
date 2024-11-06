<?php

namespace App\Admin\Resources;

use App\Admin\Resource;
use App\Admin\Fields\InputField;
use App\Admin\Fields\NumberField;
use App\Models\Book;
use App\Models\User;

class BookResource extends Resource
{
    protected static string $model = Book::class;

    public function __construct()
    {
        $this->registerFields([
            InputField::make('title')->searchable()->sortable(),
            InputField::make('description')->searchable()->sortable(),
            InputField::make('publishedAt')->searchable()->sortable(),
        ]);
    }
}
