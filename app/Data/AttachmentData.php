<?php

namespace App\Data;

use Carbon\Carbon;
use Spatie\LaravelData\Data;
class AttachmentData extends Data
{
    public function __construct(
        public int $id,
        public string $name,
        public string $path,
        public UserData $createdBy,
        public Carbon $createdAt
    )
    {
    }
}
