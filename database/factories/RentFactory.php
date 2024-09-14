<?php

namespace Database\Factories;

use App\Models\Book;
use App\Models\Rent;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class RentFactory extends Factory
{
    protected $model = Rent::class;

    public function definition(): array
    {
        return [
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
            'duration' => $this->faker->randomNumber(),
            'received_at' => Carbon::now(),
            'delivered_at' => Carbon::now(),

            'book_id' => Book::factory(),
            'created_by' => User::factory(),
            'updated_by' => User::factory(),
        ];
    }
}
