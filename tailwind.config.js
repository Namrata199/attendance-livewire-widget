const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './resources/**/*.blade.php', // Main app views
        './packages/namratalohani/attendance-livewire-widget/resources/**/*.blade.php', // Your package views
    ],
    theme: {
        extend: {
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
