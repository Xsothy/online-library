<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Sushi\Sushi;

class Author extends Model
{
    use Sushi;

    protected $fillable = [
        'name',
    ];

    protected array $rows = [
        [
            'id' => 1,
            'name' => 'J.R.R. Tolkien',
        ],
        [
            'id' => 2,
            'name' => 'J.R.R. Tolkien',
        ],
        [
            'id' => 3,
            'name' => 'J.R.R. Tolkien',
        ],
        [
            'id' => 4,
            'name' => 'George R. R. Martin',
        ],
        [
            'id' => 5,
            'name' => 'Robert Jordan',
        ],
        [
            'id' => 6,
            'name' => 'Robert Jordan',
        ],
        [
            'id' => 7,
            'name' => 'Robert Jordan',
        ],
        [
            'id' => 8,
            'name' => 'Stephen King'
        ],
    ];

    public function books(): HasMany
    {
        return $this->hasMany(Book::class);
    }
}
