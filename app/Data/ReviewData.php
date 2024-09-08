<?php

namespace App\Data;

use Carbon\Carbon;
use Spatie\LaravelData\Data;

class ReviewData extends Data
{
    public function __construct(
        public int $id,
        public float $rating,
        public UserData $createdBy,
        public Carbon $createdAt,
        public ?Carbon $updatedAt = null
    )
    {
    }
}
