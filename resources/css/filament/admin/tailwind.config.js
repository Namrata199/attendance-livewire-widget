import preset from '../../../../vendor/filament/filament/tailwind.config.preset'
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    presets: [preset],
    content: [
        './resources/**/*.blade.php',
        './src/**/*.php',
    ],
}
