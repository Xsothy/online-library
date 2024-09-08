<?php

namespace App\Data;

use App\Enum\NotificationStatusEnum;
use Spatie\LaravelData\Data;

class FlashData extends Data
{
    public function __construct(
        public string $message,
        public ?NotificationStatusEnum $status = null,
    ) {
    }
}
