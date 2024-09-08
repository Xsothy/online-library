<?php

namespace App\Enum;

// a Laravel specific base class
use Spatie\Enum\Laravel\Enum;

/**
 * @typescript
 *
 * @method static self success()
 *
 * @method static self warning()
 *
 * @method static self danger()
 *
 * @method static self info()
 *
 */
final class NotificationStatusEnum extends Enum {}
