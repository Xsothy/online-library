<?php

namespace App\Ziggy;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Stringable;
use Tighten\Ziggy\Ziggy;

class Types implements Stringable
{
    protected Ziggy $ziggy;

    public function __construct(Ziggy $ziggy)
    {
        $this->ziggy = $ziggy;
    }

    public function __toString(): string
    {
        $routeDetails = collect($this->ziggy->toArray()['routes'])->map(function ($route) {
            return collect([
                'uri' => $route['uri'],
                'methods' => $route['methods'],
                'parameters' => collect($route['parameters'] ?? [])->map(function ($param) use ($route) {
                    return Arr::has($route, "bindings.{$param}")
                        ? ['name' => $param, 'required' => ! Str::contains($route['uri'], "{$param}?"), 'binding' => $route['bindings'][$param]]
                        : ['name' => $param, 'required' => ! Str::contains($route['uri'], "{$param}?")];
                }),
                'middleware' => $route['middleware'],
            ]);
        });

        $routes = $routeDetails->map(function ($route) {
            return collect($route['parameters']);
        });

        return <<<JAVASCRIPT
/* This file is generated by Ziggy. */
declare module 'ziggy-js' {
  interface RouteList {$routes->toJson(JSON_PRETTY_PRINT)}
  interface Routes {$routeDetails->toJson(JSON_PRETTY_PRINT)}
}
export {};

JAVASCRIPT;
    }
}
