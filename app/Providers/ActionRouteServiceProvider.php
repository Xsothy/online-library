<?php

namespace App\Providers;

use App\Action\Action;
use File;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use ReflectionClass;

class ActionRouteServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $basePath = app_path('Action');
        $this->getAllClasses($basePath)->map(function (ReflectionClass $class) {
            if (!$class->isSubclassOf(Action::class)) {
                return;
            }
            $className = $class->getName();
            $routePath = str($className)->replace('\\', '/')->replace('App/', '')->replaceEnd('Action', '')->snake()
                ->replace('/_', '/')->replace('_', '-');
            $routeName = $routePath->replace('/', '.');
            // Define the route and map it to the action class method
            Route::post($routePath->toString(), [$className, '__invoke'])->name($routeName->toString());
        });
    }

    /**
     * @param $directory
     *
     * @return Collection<ReflectionClass>
     */
    protected function getAllClasses($directory): Collection
    {
        $classes = collect();

        // Get all PHP files in the directory
        $files = File::allFiles($directory);

        foreach ($files as $file) {
            // Convert the file path to a namespace (e.g., App\Action\Product\CreateAction)
            $relativePath = str($file->getRealPath())->replace(base_path(), '')->replace('/', '\\')->replace('.php', '')->replaceStart('\\app', '');
            $className = 'App' . $relativePath;

            // Add the class to the list if it exists
            if (class_exists($className)) {
                $classes->push(new ReflectionClass($className));
            }
        }

        return $classes;
    }
}
