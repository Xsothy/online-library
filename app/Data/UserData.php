<?php

namespace App\Data;

use App\Enum\KycStatusEnum;
use Spatie\LaravelData\Data;
class UserData extends Data
{
    public function __construct(
        public int $id,
        public string $name,
        public string $email,
        public ?string $firstName,
        public ?string $lastName,
        public ?KycStatusEnum $kycStatus,
        public ?string $emailVerifiedAt,
    )
    {
    }
}
