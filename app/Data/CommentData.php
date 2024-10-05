<?php

namespace App\Data;

use App\Models\Comment;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Spatie\LaravelData\Data;

class CommentData extends Data
{
    public function __construct(
        public int $id,
        public string $body,
        public UserData $createdBy,
        public Carbon $createdAt,
        /**
         * @var Collection<CommentData>
         * @typescript CommentData[]
         */
        public Collection $replies = new Collection,
        public ?Carbon $updatedAt = null,
    )
    {
    }

    public function toModel(): Comment
    {
        return new Comment([
            'body' => $this->body,
            'created_by' => $this->createdBy->id,
            'created_at' => $this->createdAt,
            'updated_at' => $this->updatedAt
        ]);
    }
}
