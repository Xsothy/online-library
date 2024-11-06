<?php

namespace App\Providers;

use App\Admin\AdminPanel;
use App\Admin\Resources\AuthorResource;
use App\Admin\Resources\BookResource;
use App\Admin\Resources\GenreResource;
use App\Admin\Resources\UserResource;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Register AdminPanel
        $this->app->singleton(AdminPanel::class, function ($app) {
            return AdminPanel::boot([
                app(UserResource::class),
                app(BookResource::class),
                app(GenreResource::class),
                app(AuthorResource::class)
            ]);
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
