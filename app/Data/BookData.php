<?php

namespace App\Data;

use App\Models\Book;
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

    public function toModel(): Book
    {
//        'title',
//        'description',
//        'author_id',
//        'publishedAt',
        $book = new Book();
        $book->title = $this->title;
        $book->description = $this->description;
        $book->author_id = 1;
        $book->publishedAt = $this->publishedAt;
        return $book;
    }
}
