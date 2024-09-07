<?php

namespace App\Data;

use Carbon\Carbon;
use Spatie\LaravelData\Attributes\Computed;
use Spatie\LaravelData\Data;

class RentData extends Data
{
    #[Computed]
    public string $dueAt;
    public function __construct(
        public int $id,
        public BookData $book,
        public int $duration,
        public UserData $createdBy,
        public UserData $updatedBy,
        public string $createdAt,
        public string $deliveredAt,
        public string $receivedAt
    ) {
        $this->dueAt = Carbon::parse($this->deliveredAt)->addDays($this->duration)->toDateString();
    }
}
