<?php

namespace App\Admin\Fields;

use App\Admin\Field;

class NumberField extends Field
{
    public function getVariant(): string
    {
        return 'Number';
    }
}

