<?php

namespace App\Admin\Fields;

use App\Admin\Field;

class PasswordField extends Field
{
    public function getVariant(): string
    {
        return 'Password';
    }
}
