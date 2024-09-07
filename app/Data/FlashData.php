<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class FlashData extends Data
{
    public function __construct(
        public string $message,
        public string $level,
    ) {
    }
}
