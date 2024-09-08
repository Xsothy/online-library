<?php

namespace App\Data;

use App\Enum\NotificationStatusEnum;
use Carbon\Carbon;
use Spatie\LaravelData\Data;

class NotificationData extends Data
{
    public function __construct(
        public int $id,
        public NotificationStatusEnum $status,
        public string $message,
        public UserData $user,
        public ?string $link = null,
        public ?UserData $createdBy = null,
        public ?Carbon $createdAt = null,
    )
    {
    }
}
