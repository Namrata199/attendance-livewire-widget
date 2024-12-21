import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css', // Main app styles
                'resources/js/app.js',  // Main app scripts
                'packages/namratalohani/attendance-livewire-widget/resources/css/app.css', // Package styles
            ],
            refresh: true,
        }),
    ],
});
