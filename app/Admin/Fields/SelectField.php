<?php

namespace App\Admin\Fields;

use App\Admin\Field;

class SelectField extends Field
{
    public function getVariant(): string
    {
        return 'Select';
    }
}
