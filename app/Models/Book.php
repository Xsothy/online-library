<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Sushi\Sushi;

class Book extends Model
{
    use HasFactory, Sushi;

    public $timestamps = true;

    protected $fillable = [
        'title',
        'description',
        'author_id',
        'publishedAt',
    ];

    protected array $rows = [
        [
            'id' => 1,
            'title' => 'To Kill a Mockingbird',
            'description' => 'A classic of modern American literature. It is a novel about a young boy named Jem, who is wrongfully accused of a crime he did not commit. He is then wrongly convicted and imprisoned, and his family is torn apart by the trial and its aftermath.',
            'author_id' => 1,
            'publishedAt' => '2022-01-01',
        ],
        [
            'id' => 2,
            'title' => 'The Catcher in the Rye',
            'description' => 'A classic of modern American literature. The novel follows the life of Holden Caulfield, a teenage boy who is struggling to find his place in the world.',
            'author_id' => 2,
            'publishedAt' => '2022-01-01',
        ],
        [
            'id' => 3,
            'title' => 'The Great Gatsby',
            'description' => 'A classic of modern American literature. Set in the 1920s, the novel follows the life of Jay Gatsby, a wealthy and mysterious man who is obsessed with the idea of love.',
            'author_id' => 3,
            'publishedAt' => '2022-01-01',
        ],
        [
            'id' => 4,
            'title' => 'The Lord of the Rings',
            'description' => 'A classic of modern American literature. It is a novel about hobbits, dwarves, and wizards, set in Middle-earth, a fictional world created by J.R.R. Tolkien.',
            'author_id' => 4,
            'publishedAt' => '2022-01-01',
        ],
        [
            'id' => 5,
            'title' => 'The Hobbit',
            'description' => 'A classic of modern American literature. It is a novel about hobbits, dwarves, and wizards, set in Middle-earth, a fictional world created by J.R.R. Tolkien.',
            'author_id' => 4,
            'publishedAt' => '2022-01-01',
        ],
        [
            'id' => 6,
            'title' => 'The Hobbit',
            'description' => 'A classic of modern American literature. It is a novel about hobbits, dwarves, and wizards, set in Middle-earth, a fictional world created by J.R.R. Tolkien.',
            'author_id' => 4,
            'publishedAt' => '2022-01-01',
        ],
        [
            'id' => 7,
            'title' => 'The Hobbit',
            'description' => 'A classic of modern American literature. It is a novel about hobbits, dwarves, and wizards, set in Middle-earth, a fictional world created by J.R.R. Tolkien.',
            'author_id' => 4,
            'publishedAt' => '2022-01-01',
        ],
        [
            'id' => 8,
            'title' => 'The Hobbit',
            'description' => 'A classic of modern American literature. It is a novel about hobbits, dwarves, and wizards, set in Middle-earth, a fictional world created by J.R.R. Tolkien.',
            'author_id' => 4,
            'publishedAt' => '2022-01-01',
        ],
    ];

    protected function casts(): array
    {
        return [
            'publishedAt' => 'datetime',
        ];
    }

    public function rents(): HasMany
    {
        return $this->hasMany(Rent::class);
    }

    public function rent(): HasOne
    {
        return $this->rents()->where('created_by', auth()->user()->id)->one();
    }

    public function reservations(): HasMany
    {
        return $this->hasMany(Reservation::class);
    }

    public function reservation(): HasOne
    {
        return $this->reservations()->where('created_by', auth()->user()->id)->one();
    }

    public function wishes(): HasMany
    {
        return $this->hasMany(Wish::class);
    }

    public function wish(): HasOne
    {
        return $this->wishes()->where('created_by', auth()->user()->id)->one();
    }

    public function genres(): BelongsToMany
    {
        return $this->belongsToMany(Genre::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }

    public function inventories(): BelongsToMany
    {
        return $this->belongsToMany(Inventory::class);
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(Author::class);
    }
}
