<?php

namespace App\Data;

use Carbon\Carbon;
use Spatie\LaravelData\Attributes\Computed;
use Spatie\LaravelData\Data;

class InvoiceData extends Data
{
    public function __construct(
        public int $id,
        public BookData $book,
        public UserData $createdBy,
        public Carbon $createdAt,
    ) {

    }
}
