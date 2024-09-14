<?php

namespace Database\Factories;

use App\Models\Book;
use App\Models\BookInventory;
use App\Models\Inventory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class BookInventoryFactory extends Factory
{
    protected $model = BookInventory::class;

    public function definition(): array
    {
        return [
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),

            'book_id' => Book::factory(),
            'inventory_id' => Inventory::factory(),
        ];
    }
}
