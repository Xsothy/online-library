<?php

namespace App\Data;

use App\Enum\KycStatusEnum;
use Spatie\LaravelData\Optional;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\Optional as TypeScriptOptional;
/** @typescript */
class UserData extends Data
{
    public function __construct(
        public string $name,
        public string $email,
        public ?string $firstName,
        public ?string $lastName,
        public ?KycStatusEnum $kycStatus,
    )
    {
    }
}
