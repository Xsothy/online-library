<?php

namespace App\Typescript;

use Spatie\TypeScriptTransformer\Structures\TransformedType;
use Spatie\TypeScriptTransformer\Structures\TypesCollection;
use Spatie\TypeScriptTransformer\Writers\TypeDefinitionWriter;

class TypeDefinitionActionWriter extends TypeDefinitionWriter
{
    public function format(TypesCollection $collection): string
    {
        [$namespaces] = $this->groupByNamespace($collection);

        $output = parent::format($collection);

        $output .= "declare namespace App.Action {" . PHP_EOL;
        $output .= "export type ActionTypeMap = {" . PHP_EOL;
        $toKeyActionType = function (TransformedType $type) {
            return \Str::of($type->reflection->getName())->replaceStart('App\\Action\\', '')->replace('\\', '.')->replaceEnd('Action', '')->snake()
                ->replace('._', '.')->replace('_', '-')->toString();
        };
        $toValueActionType = function (TransformedType $type) {
            return \Str::of($type->reflection->getName())->replace('\\', '.')->replaceEnd('Action', '')->toString();
        };
        foreach ($namespaces as $namespace => $types) {
            if (str($namespace)->startsWith('App.Action')) {
                $output .= join(PHP_EOL, array_map(
                    fn(TransformedType $type) => "  '{$toKeyActionType($type)}': {$toValueActionType($type)},",
                    $types
                ));
            }
        }

        $output .= PHP_EOL . "};" . PHP_EOL;
        $output .= "}" . PHP_EOL;

        return $output;
    }
}
