<?php

namespace App\Admin\Fields;

use App\Admin\Field;

class ComboboxField extends Field
{
    public function getVariant(): string
    {
        return 'Combobox';
    }
}
