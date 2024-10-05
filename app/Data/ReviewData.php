<?php

namespace App\Data;

use App\Models\Review;
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

    public function toModel(): Review
    {
        return new Review([
            'rating' => $this->rating,
            'created_by' => $this->createdBy->id,
            'created_at' => $this->createdAt,
            'updated_at' => $this->updatedAt,
        ]);
    }
}
