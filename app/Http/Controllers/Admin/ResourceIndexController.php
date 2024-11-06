<?php

namespace App\Http\Controllers\Admin;

use App\Admin\AdminPanel;
use App\Admin\Resource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ResourceIndexController extends Controller
{
    public function __construct(
        private readonly AdminPanel $adminPanel
    )
    {
    }

    public function __invoke(Request $request, string $resource)
    {
        $resources = $this->adminPanel->toInertia();
        /**
         * @var Resource $currentResource
         */
        $currentResource = collect($resources)
            ->firstWhere('uriKey', $resource);

        if (! $currentResource) {
            abort(404);
        }

        return Inertia::render('Admin/ResourceIndex', [
            'resources' => $resources,
            'resource' => $currentResource,
        ]);
    }
}
