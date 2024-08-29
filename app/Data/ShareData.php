<?php

namespace App\Data;

use App\Data\Config\AppConfigData;
use Illuminate\Http\Request;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\Optional;

/** @typescript */
class ShareData extends Data
{

    public function __construct(
        public AuthData $auth,
        public ConfigData $config,
    )
    {
    }

    public static function fromRequest(Request $request): ShareData
    {
        return new self(
            new AuthData(
                $request->user() ? UserData::from($request->user()) : null
            ),
            new ConfigData(
                new AppConfigData()
            )
        );
    }
}
