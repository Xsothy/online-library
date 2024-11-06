<?php

namespace App\Admin\Fields;

use App\Admin\Field;

class MultiSelectField extends Field
{
    public function getVariant(): string
    {
        return 'Multi Select';
    }
}
