<?php

namespace App\Data\Config;

use Spatie\LaravelData\Data;

class AppConfigData extends Data
{
    public string $name;
    public string $env;
    public string $debug;
    public string $url;
    public function __construct(
    )
    {
        $this->name = config('app.name');
        $this->env = config('app.env');
        $this->debug = config('app.debug');
        $this->url = config('app.url');
    }
}
