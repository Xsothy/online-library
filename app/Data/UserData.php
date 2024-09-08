<?php

namespace App\Data;

use App\Enum\KycStatusEnum;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Spatie\LaravelData\Data;
class UserData extends Data
{
    public function __construct(
        public int $id,
        public string $name,
        public string $email,
        public Collection $attachments = new Collection(),
        public ?string $firstName = null,
        public ?string $lastName = null,
        public ?KycStatusEnum $kycStatus = null,
        /**
         * @var Collection<AttachmentData>
         * @typescript AttachmentData[]
         */
        public ?Carbon $emailVerifiedAt = null,
    )
    {
    }
}
