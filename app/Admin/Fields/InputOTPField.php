<?php

namespace App\Admin\Fields;

use App\Admin\Field;

class InputOTPField extends Field
{
    public function getVariant(): string
    {
        return 'Input OTP';
    }
}
