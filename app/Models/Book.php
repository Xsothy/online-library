<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'author_id',
        'publishedAt',
    ];

    protected function casts(): array
    {
        return [
            'publishedAt' => 'datetime',
        ];
    }
}
