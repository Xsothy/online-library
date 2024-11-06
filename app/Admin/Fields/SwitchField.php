<?php

namespace App\Admin\Fields;

use App\Admin\Field;

class SwitchField extends Field
{
    public function getVariant(): string
    {
        return 'Switch';
    }
}
