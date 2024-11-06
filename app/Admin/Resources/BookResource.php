<?php

namespace App\Admin\Resources;

use App\Admin\Resource;
use App\Admin\Fields\TextField;
use App\Admin\Fields\NumberField;
use App\Models\Book;
use App\Models\User;

class BookResource extends Resource
{
    protected static string $model = Book::class;

    public function __construct()
    {
        $this->registerFields([
            TextField::make('title')->searchable()->sortable(),
            TextField::make('description')->searchable()->sortable(),
            TextField::make('publishedAt')->searchable()->sortable(),
        ]);
    }
}
