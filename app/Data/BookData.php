<?php

namespace App\Data;

use Illuminate\Support\Collection;
use Spatie\LaravelData\Attributes\Computed;
use Spatie\LaravelData\Data;

class BookData extends Data
{
    #[Computed]
    public bool $isAvailable;
    public function __construct(
        public int $id,
        public string $title,
        public string $description,
        public string $publish_at,
        /**
         * @var Collection<InventoryData>
         * @typescript InventoryData[]
         */
        public Collection $inventories,
        /**
         * @var Collection<GenreData>
         * @typescript GenreData[]
         */
        public Collection $genres
    )
    {
        $this->isAvailable = $inventories->some(fn (InventoryData $inventory) => $inventory->quantity > 0);
    }
}
