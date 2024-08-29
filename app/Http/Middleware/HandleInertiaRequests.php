<?php

namespace App\Http\Middleware;

use App\Data\AuthData;
use App\Data\Config\AppConfigData;
use App\Data\ConfigData;
use App\Data\ShareData;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Spatie\LaravelData\Optional;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $shareData = ShareData::fromRequest($request)->toArray();
        return [
            ...parent::share($request),
            ...$shareData
        ];
    }
}
