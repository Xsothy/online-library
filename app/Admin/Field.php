<?php

namespace App\Admin;

use Illuminate\Support\Str;

abstract class Field
{
    protected string $name;
    protected string $label;
    protected mixed $default = null;
    protected string $type;
    protected bool $sortable = false;
    protected bool $searchable = false;
    protected array $rules = [];

    public function __construct(string $name)
    {
        $this->name = $name;
        $this->label = Str::of($name)
            ->snake()->title()
            ->replace('_', ' ');
    }

    public static function make(string $name): Field
    {
        return new static($name);
    }

    public function label(string $label): self
    {
        $this->label = $label;
        return $this;
    }

    public function default(mixed $default): self
    {
        $this->default = $default;
        return $this;
    }

    public function sortable(): self
    {
        $this->sortable = true;
        return $this;
    }

    public function searchable(): self
    {
        $this->searchable = true;
        return $this;
    }

    public function rules(array $rules): self
    {
        $this->rules = $rules;
        return $this;
    }

    public function toArray(): array
    {
        return [
            'name' => $this->name,
            'label' => $this->label,
            'default' => $this->default,
            'type' => $this->type,
            'sortable' => $this->sortable,
            'searchable' => $this->searchable,
            'rules' => $this->rules,
        ];
    }
}
