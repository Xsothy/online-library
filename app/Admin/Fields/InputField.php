<?php

namespace App\Admin\Fields;

use App\Admin\Field;

class InputField extends Field
{
    /**
     * type of input is text | email | number
     */
    private string $type = 'text';
    public function getVariant(): string
    {
        return 'Input';
    }

    public function setType($type): static
    {
        $this->type = $type;
        return $this;
    }

    public function toArray(): array
    {
        return [
            'type' => $this->type,
            ...parent::toArray()
        ];
    }
}
