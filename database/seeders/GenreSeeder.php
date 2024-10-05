<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Seeder;

class GenreSeeder extends Seeder
{
    public function run(): void
    {
        Genre::insert([
            ['name' => 'Action', 'description' => 'Action movies'],
            ['name' => 'Comedy', 'description' => 'Comedy movies'],
            ['name' => 'Drama', 'description' => 'Drama movies'],
            ['name' => 'Horror', 'description' => 'Horror movies'],
            ['name' => 'Thriller', 'description' => 'Thriller movies'],
            ['name' => 'Sci-Fi', 'description' => 'Sci-Fi movies'],
            ['name' => 'Documentary', 'description' => 'Documentary movies']
        ]);
    }
}
