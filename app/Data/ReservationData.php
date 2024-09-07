<?php

namespace App\Data;

use Carbon\Carbon;
use Spatie\LaravelData\Attributes\Computed;
use Spatie\LaravelData\Data;

class ReservationData extends Data
{
    public function __construct(
        public int $id,
        public BookData $book,
        public int $duration,
        public UserData $createdBy,
        public string $createdAt
    ) {
    }
}
