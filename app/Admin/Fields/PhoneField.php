<?php

namespace App\Admin\Fields;

use App\Admin\Field;

class PhoneField extends Field
{
    public function getVariant(): string
    {
        return 'Phone';
    }
}
