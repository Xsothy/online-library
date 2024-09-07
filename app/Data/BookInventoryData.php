<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class BookInventoryData extends Data
{
    public function __construct(
        public int $id,
        public int $book_id,
        public InventoryData $inventory,
    )
    {
    }
}
