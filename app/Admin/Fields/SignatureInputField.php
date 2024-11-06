<?php

namespace App\Admin\Fields;

use App\Admin\Field;

class SignatureInputField extends Field
{
    public function getVariant(): string
    {
        return 'Signature Input';
    }
}
