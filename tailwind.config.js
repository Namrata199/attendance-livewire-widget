import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
        './packages/namratalohani/attendance-livewire-widget/resources/views/filament/widgets/**/*.blade.php',
        './src/**/*.php',   
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                green: {
                    500: '#22c55e',
                    600: '#16a34a',
                },
                red: {
                    500: '#ef4444',
                    600: '#dc2626',
                },
                blue: {
                    100: '#dbeafe',
                    900: '#1e3a8a',
                },
            },
        },
    },
    plugins: [],
};
