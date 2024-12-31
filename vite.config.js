import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'packages/namratalohani/attendance-livewire-widget/resources/css/filament/admin/theme.css',
            ],
            refresh: true,
        }),
    ],
});
