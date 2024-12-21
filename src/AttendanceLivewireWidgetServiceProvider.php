<?php

namespace Namratalohani\AttendanceLivewireWidget;

use Filament\Facades\Filament;
use Filament\Panel;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Namratalohani\AttendanceLivewireWidget\Filament\Widgets\AttendanceWidget;

class AttendanceLivewireWidgetServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->mergeConfigFrom(__DIR__.'/../config/attendance.php', 'attendance');
    }

    public function boot()
    {
        // Publish configuration.
        $this->publishes([
            __DIR__.'/../config/attendance.php' => config_path('attendance.php'),
        ], 'config');

        $this->publishes([
            __DIR__.'/../resources/css/app.css' => public_path('vendor/attendance-widget/css/app.css'),
        ], 'attendance-assets');

        Route::middleware('web')->group(function () {
            Route::get('/attendance-widget/css/app.css', function () {
                $path = __DIR__.'/../resources/css/app.css';

                // Ensure the file exists
                if (! file_exists($path)) {
                    abort(404);
                }

                return response()->file($path, [
                    'Content-Type' => 'text/css',
                ]);
            })->name('attendance-widget.css');
        });
        // Publish migrations.
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');

        // Register views.
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'attendance');

        Blade::component('attendance::layouts.default', 'attendance-layout');

        // Register Filament widget.
        Filament::serving(function () {
            Filament::registerPanel(
                Panel::make()
                    ->id('attendance')
                    ->path('admin')
                    ->widgets([
                        AttendanceWidget::class,
                    ])
            );
        });
    }
}
