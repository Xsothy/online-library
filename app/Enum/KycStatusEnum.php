<?php

namespace App\Enum;

// a Laravel specific base class
use Spatie\Enum\Laravel\Enum;

/**
 * @typescript
 * @method static self pending()
 * @method static self rejected()
 * @method static self approved()
 */
final class KycStatusEnum extends Enum {}
