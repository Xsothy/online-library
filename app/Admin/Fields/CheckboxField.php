<?php

namespace App\Admin\Fields;

use App\Admin\Field;

class CheckboxField extends Field
{
    public function getVariant(): string
    {
        return 'Checkbox';
    }
}
