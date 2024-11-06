<?php

namespace App\Admin;

use Closure;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Str;
use JsonSerializable;

abstract class Field implements JsonSerializable, Arrayable
{
    protected string $name;
    protected string $label;
    protected ?string $placeholder = null;
    protected ?string $description = null;
    protected bool $disabled = false;
    protected mixed $value = null;
    protected ?Closure $setValue = null;
    protected bool $checked = false;
    protected ?Closure $onChange = null;
    protected ?Closure $onSelect = null;
    protected int $rowIndex = 1;
    protected ?bool $required = null;
    protected ?int $min = null;
    protected ?int $max = null;
    protected ?int $step = null;
    protected bool $sortable = false;
    protected bool $searchable = false;
    protected array $rules = [];

    public abstract function getVariant(): string;

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

    public function searchable($searchable = true): static
    {
        $this->searchable = $searchable;
        return $this;
    }

    public function sortable($sortable = true): static
    {
        $this->sortable = $sortable;
        return $this;
    }

    public function default($default): static
    {
        $this->value = $default;
        return $this;
    }

    public function toArray(): array
    {
        return [
            'variant' => $this->getVariant(),
            'name' => $this->name,
            'label' => $this->label,
            'placeholder' => $this->placeholder,
            'description' => $this->description,
            'disabled' => $this->disabled,
            'value' => $this->value,
            'setValue' => $this->setValue,
            'checked' => $this->checked,
            'onChange' => $this->onChange,
            'onSelect' => $this->onSelect,
            'rowIndex' => $this->rowIndex,
            'required' => $this->required,
            'min' => $this->min,
            'max' => $this->max,
            'step' => $this->step,
            'sortable' => $this->sortable,
            'searchable' => $this->searchable,
            'rules' => $this->rules,
        ];
    }

    public function jsonSerialize(): array
    {
        return $this->toArray();
    }
}
