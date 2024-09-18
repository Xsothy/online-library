<?php

namespace App\Data;

use App\Enum\KycStatusEnum;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Validation\Rule;
use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Attributes\Validation\Enum;
use Spatie\LaravelData\Data;
use Illuminate\Validation\Rules;
use Spatie\LaravelData\Mappers\SnakeCaseMapper;
use Spatie\LaravelData\Support\Validation\ValidationContext;

#[MapInputName(SnakeCaseMapper::class)]
class UserData extends Data
{

    public function __construct(
        public int $id,
        public string $name,
        public string $email,
        /**
         * @var Collection<AttachmentData>
         * @typescript AttachmentData[]
         */
        public Collection $attachments = new Collection(),
        /**
         * @var Collection<ReservationData>
         * @typescript ReservationData[]
         */
        public Collection $reservations = new Collection(),
        /**
         * @var Collection<RentData>
         * @typescript RentData[]
         */
        public Collection $rents = new Collection(),
        /**
         * @var Collection<BookData>
         * @typescript BookData[]
         */
        public Collection $wishList = new Collection(),
        public ?string $phoneNumber = null,
        public ?string $firstName = null,
        public ?string $lastName = null,
        public ?KycStatusEnum $kycStatus = null,
        public ?Carbon $emailVerifiedAt = null,
    )
    {
    }

    public static function rules(): array
    {
        return [
            'id' => ['nullable', 'integer'],
            'firstName' => ['nullable', 'string', 'max:255'],
            'lastName' => ['nullable', 'string', 'max:255'],
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'phone_number' => ['nullable', 'string', 'max:255'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'kycStatus' => ['nullable', Enum::create(KycStatusEnum::class)],
            'studentCardFront' => ['nullable', 'image', 'max:1024'],
            'studentCardBack' => ['nullable', 'image', 'max:1024'],
            'idCardFront' => ['nullable', 'image', 'max:1024'],
            'idCardBack' => ['nullable', 'image', 'max:1024'],
        ];
    }

    public function toArray(): array
    {
        return [
            parent::toArray(),
            'first_name' => $this->firstName,
            'last_name' => $this->lastName
        ];
    }
}
