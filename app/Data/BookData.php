<?php

namespace App\Data;

use Carbon\Carbon;
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
        public string $author,
        public ?Carbon $publishedAt = null,
        /**
         * @var Collection<InventoryData>
         * @typescript InventoryData[]
         */
        public Collection $inventories = new Collection,
        /**
         * @var Collection<GenreData>
         * @typescript GenreData[]
         */
        public Collection $genres = new Collection,
        /**
         * @var Collection<CommentData>
         * @typescript CommentData[]
         */
        public Collection $comments = new Collection,
        /**
         * @var Collection<ReviewData>
         * @typescript ReviewData[]
         */
        public Collection $reviews = new Collection,
        public ?AttachmentData $cover = null,
    )
    {
        $this->isAvailable = $inventories->some(fn (InventoryData $inventory) => $inventory->quantity > 0);
    }
}
