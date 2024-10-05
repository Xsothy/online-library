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

    public function toModel(): \App\Models\Inventory
    {
        return new \App\Models\Inventory([
            'quantity' => $this->quantity,
            'price' => $this->price,
            'rent_price' => $this->rentPrice,
            'created_by' => $this->createdBy?->id,
            'updated_by' => $this->updatedBy?->id,
            'created_at' => $this->createdAt,
            'updated_at' => $this->updatedAt,
        ]);
    }
}
