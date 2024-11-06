<?php

namespace App\Admin\Fields;

use App\Admin\Field;

class DatePickerField extends Field
{
    public function getVariant(): string
    {
        return 'Date Picker';
    }
}
