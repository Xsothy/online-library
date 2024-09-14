<?php

namespace Database\Factories;

use App\Models\Invoice;
use App\Models\Rent;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class InvoiceFactory extends Factory
{
    protected $model = Invoice::class;

    public function definition(): array
    {
        return [
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),

            'rent_id' => Rent::factory(),
        ];
    }
}
