<?php

namespace App\Typescript;

use App\Action\Action;
use Illuminate\Support\Stringable;
use ReflectionClass;
use Spatie\TypeScriptTransformer\Collectors\Collector;
use Spatie\TypeScriptTransformer\Structures\TransformedType;
use Str;

class ActionCollector extends Collector
{
    public Stringable $className;

    public function getTransformedType(ReflectionClass $class): ?TransformedType
    {
        if (!$class->isSubclassOf(Action::class)) {
            return null;
        }

        $this->className = Str::of($class->getShortName());

        if (!$this->className->endsWith('Action')) {
            return null;
        }

        $transformer = new ActionTransformer($this->config);

        return $transformer->transform(
            $class,
            $this->className->replace('Action', '')
        );
    }
}
