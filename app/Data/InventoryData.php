<?php

namespace App\Data;

use Carbon\Carbon;
use Spatie\LaravelData\Data;

class InventoryData extends Data
{
    public function __construct(
        public int $id,
        public int $quantity,
        public float $price,
        public float $rentPrice,
        public ?UserData $createdBy = null,
        public ?UserData $updatedBy = null,
        public ?Carbon $createdAt = null,
        public ?Carbon $updatedAt = null,
    )
    {
    }
}
