<?php

namespace App\Admin;

use Illuminate\Database\Eloquent\Model;
use Spatie\LaravelData\Concerns\BaseData;
use Str;

/**
 * @template TModel of Model
 */
abstract class Resource
{
    /**
     * @var class-string<TModel>
     */
    protected static string $model;

    /**
     * @var TModel $resource
     */
    protected Model $resource;
    /**
     * @var Field[]
     */
    protected array $fields = [];
    /**
     * @var array<string, array<array-key, mixed>>
     */
    protected array $actions = [];
    /**
     * @var array<string, array<array-key, mixed>>
     */
    protected array $filters = [];

    /**
     * @return Field[]
     */
    public function fields(): array
    {
        return $this->fields;
    }

    public function registerField(Field $field): self
    {
        $this->fields[] = $field;
        return $this;
    }

    /**
     * @param array<Field> $fields
     */
    public function registerFields(array $fields): self
    {
        foreach ($fields as $field) {
            $this->registerField($field);
        }
        return $this;
    }

    /**
     * @return class-string<T>
     */
    public function getModel(): string
    {
        return static::$model;
    }

    public function getData()
    {
        if (method_exists(static::$model, 'getData') && isset(static::$model::$dataClass)) {
            /** @var class-string<BaseData> $dataClass */
            $dataClass = static::$model::$dataClass;
            return $dataClass::collect(static::$model::all());
        } else {
            return static::$model::all();
        }
    }

    public static function getLabel(): string
    {
        return Str::of(static::$model)
            ->afterLast('\\')
            ->title();
    }

    public static function getPluralLabel(): string
    {
        return Str::plural(static::getLabel());
    }

    public static function uriKey(): string
    {
        return Str::slug(static::getLabel());
    }
}
