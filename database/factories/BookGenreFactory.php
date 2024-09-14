<?php

namespace Database\Factories;

use App\Models\Book;
use App\Models\BookGenre;
use App\Models\Genre;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class BookGenreFactory extends Factory
{
    protected $model = BookGenre::class;

    public function definition(): array
    {
        return [
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),

            'book_id' => Book::factory(),
            'genre_id' => Genre::factory(),
        ];
    }
}
