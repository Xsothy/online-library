<?php

namespace App\Admin;

use Illuminate\Database\Eloquent\Model;
use Inertia\Inertia;
use Spatie\LaravelData\Data;

class AdminPanel
{
    /**
     * @var array<Resource<Model>>
     */
    protected array $resources = [];

    public static function boot(
        array $resources = []
    ): self
    {
        $panel = new self();
        $panel->registerResources($resources);
        return $panel;
    }

    public function registerResource(Resource $resource): self
    {
        $this->resources[] = $resource;
        return $this;
    }

    public function registerResources(array $resources = []): self
    {
        foreach ($resources as $resource) {
            $this->registerResource($resource);
        }
        return $this;
    }

    /**
     * @return Resource<Model>[]
     */
    public function getResources(): array
    {
        return $this->resources;
    }

    /**
     * @return array<array-key, array{
     *     model: class-string<Model>,
     *     label: string,
     *     pluralLabel: string,
     *     uriKey: string,
     *     fields: array<array-key, array{
     *         name: string,
     *         type: string,
     *         sortable: bool,
     *         searchable: bool,
     *         rules: array<string>
     *     }>
     * }>
     */
    public function toInertia(): array
    {
        return collect($this->getResources())
            ->map(fn(Resource $resource) => [
                'model' => $resource->getModel(),
                'data' => $resource->getData(),
                'label' => $resource->getLabel(),
                'pluralLabel' => $resource->getPluralLabel(),
                'uriKey' => $resource->uriKey(),
                'fields' => collect($resource->fields())->map(fn($field) => $field->toArray())->toArray(),
            ])->toArray();
    }

    public function toResponse(): \Inertia\Response
    {
        return Inertia::render('Admin/AdminPanel', [
            'resources' => $this->toInertia(),
        ]);
    }
}
