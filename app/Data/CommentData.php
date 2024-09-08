<?php

namespace App\Data;

use Carbon\Carbon;
use Spatie\LaravelData\Data;

class CommentData extends Data
{
    public function __construct(
        public int $id,
        public string $body,
        public UserData $createdBy,
        public Carbon $createdAt,
        public ?CommentData $parent = null,
        public ?Carbon $updatedAt = null,
    )
    {
    }
}
