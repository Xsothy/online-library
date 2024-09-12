<?php

namespace Database\Factories;

use App\Models\Attachment;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class AttachmentFactory extends Factory
{
    protected $model = Attachment::class;

    public function definition(): array
    {
        return [
            'updated_at' => Carbon::now(),
            'name' => $this->faker->randomElement(['avatar', 'cover',]),
            'path' => $this->faker->word(),
            'created_by' => $this->faker->randomElement(User::all()->pluck('id')->toArray()),
            'created_at' => Carbon::now(),
        ];
    }
}
