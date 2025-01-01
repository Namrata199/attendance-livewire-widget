import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
        './packages/namratalohani/attendance-livewire-widget/resources/views/**/*.blade.php', 
        './src/**/*.php', 
    ],
    theme: {
        extend: {
        },
    },
    plugins: [],
};
