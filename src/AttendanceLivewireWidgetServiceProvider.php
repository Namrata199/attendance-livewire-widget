<?php

namespace Namratalohani\AttendanceLivewireWidget;

use Filament\Facades\Filament;
use Filament\Panel;
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

        // Publish migrations.
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');

        // Register views.
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'attendance');

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
