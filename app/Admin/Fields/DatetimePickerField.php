<?php

namespace App\Admin\Fields;

use App\Admin\Field;

class DatetimePickerField extends Field
{
    public function getVariant(): string
    {
        return 'Datetime Picker';
    }
}
