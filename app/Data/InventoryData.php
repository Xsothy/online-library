<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class InventoryData extends Data
{
    public function __construct(
        public int $id,
        public int $quantity,
        public float $price,
        public float $rent_price,
        public UserData $created_by,
        public UserData $updated_by,
        public string $created_at,
        public string $updated_at,
    )
    {
    }
}
