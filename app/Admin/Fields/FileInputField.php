<?php

namespace App\Admin\Fields;

use App\Admin\Field;

class FileInputField extends Field
{
    public function getVariant(): string
    {
        return 'File Input';
    }
}
