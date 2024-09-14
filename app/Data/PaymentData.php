<?php

namespace App\Data;

use Carbon\Carbon;
use Spatie\LaravelData\Attributes\Computed;
use Spatie\LaravelData\Data;

class PaymentData extends Data
{
    #[Computed]
    public string $dueAt;
    public function __construct(
        public int $id,
        public InvoiceData $invoice,
        public Carbon $createdAt
    ) {
    }
}
