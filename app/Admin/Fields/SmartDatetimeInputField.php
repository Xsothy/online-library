<?php

namespace App\Admin\Fields;

use App\Admin\Field;

class SmartDatetimeInputField extends Field
{
    public function getVariant(): string
    {
        return 'Smart Datetime Input';
    }
}
