<?php

namespace App\Admin\Fields;

use App\Admin\Field;

class TagsInputField extends Field
{
    public function getVariant(): string
    {
        return 'Tags Input';
    }
}
