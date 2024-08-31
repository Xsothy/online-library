<?php

return [
    'middleware' => 'web',
    'output' => [
        'path' => 'resources/js/types',
        'types' => \App\Ziggy\Types::class,
        'file' => Tighten\Ziggy\Output\File::class,
        'merge_script' => Tighten\Ziggy\Output\MergeScript::class,
        'script' => Tighten\Ziggy\Output\Script::class,
    ]
];
