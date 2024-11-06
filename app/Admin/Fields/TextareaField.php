<?php

namespace App\Admin\Fields;

use App\Admin\Field;

class TextareaField extends Field
{
    public function getVariant(): string
    {
        return 'Textarea';
    }
}
