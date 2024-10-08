<?php

namespace App\Data;

use App\Data\Config\AppConfigData;
use Spatie\LaravelData\Data;

class ConfigData extends Data
{
    public function __construct(
        public AppConfigData $app
    )
    {

    }
}
