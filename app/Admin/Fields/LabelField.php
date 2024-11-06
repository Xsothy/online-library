<?php

namespace App\Admin\Fields;

use App\Admin\Field;

class LabelField extends Field
{
    public function getVariant(): string
    {
        return 'Label';
    }
}
