<?php

namespace App\Typescript;

use App\Action\Action;
use ReflectionClass;
use Spatie\TypeScriptTransformer\Structures\MissingSymbolsCollection;
use Spatie\TypeScriptTransformer\Structures\TransformedType;
use Spatie\TypeScriptTransformer\Transformers\DtoTransformer;
use Spatie\TypeScriptTransformer\Transformers\Transformer;
use Spatie\TypeScriptTransformer\TypeScriptTransformerConfig;

class ActionTransformer extends DtoTransformer
{
    public function canTransform(ReflectionClass $class): bool
    {
        if (! $class->isSubclassOf(Action::class)) {
            return false;
        }

        return true;
    }

    public function transform(ReflectionClass $class, string $name): ?TransformedType
    {
        return parent::transform($class, $name); // TODO: Change the autogenerated stub
    }
}