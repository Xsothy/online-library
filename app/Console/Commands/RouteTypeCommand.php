<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Tighten\Ziggy\Output\File;
use Tighten\Ziggy\Output\Types;
use Tighten\Ziggy\Ziggy;

class RouteTypeCommand extends Command
{
    protected $signature = 'route:type';

    protected $description = 'Generate a JavaScript file containing Ziggy’s routes and configuration.';

    protected Filesystem $files;

    public function __construct(Filesystem $files)
    {
        parent::__construct();

        $this->files = $files;
    }

    public function handle(): void
    {
        $ziggy = new Ziggy();

        $path = config('ziggy.output.path', 'resources/js/ziggy.js');

        if ($this->files->isDirectory(base_path($path))) {
            $path .= '/ziggy';
        } else {
            $this->makeDirectory($path);
        }

        $name = preg_replace('/(\.d)?\.ts$|\.js$/', '', $path);


        $output = config('ziggy.output.file', File::class);

        $this->files->put(base_path("{$name}.js"), new $output($ziggy));

        $types = config('ziggy.output.types', Types::class);

        $this->files->put(base_path("{$name}.d.ts"), new $types($ziggy));

        $this->info('Files generated!');
    }

    private function makeDirectory($path): void
    {
        if (!$this->files->isDirectory(dirname(base_path($path)))) {
            $this->files->makeDirectory(dirname(base_path($path)), 0755, true, true);
        }
    }
}
