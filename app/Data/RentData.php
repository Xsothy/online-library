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
        public Carbon $createdAt,
        public ?UserData $updatedBy = null,
        public ?Carbon $deliveredAt = null,
        public ?Carbon $receivedAt = null,
    ) {
        $this->dueAt = Carbon::parse($this->deliveredAt)->addDays($this->duration)->toDateString();
    }
}
