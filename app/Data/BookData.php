<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class BookData extends Data
{
    public function __construct(
        public int $id,
        public string $title,
        public string $description,
        public string $publish_at,
        /**
         * @var InventoryData[]
         * @typescript InventoryData[]
         */
        public array $inventories
    )
    {

    }
}
