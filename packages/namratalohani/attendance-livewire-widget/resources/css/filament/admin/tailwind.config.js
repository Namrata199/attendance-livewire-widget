import preset from '../../../../vendor/filament/filament/tailwind.config.preset'
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    presets: [preset],
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./vendor/filament/**/*.blade.php",
        "./app/Filament/**/*.php",
        "./app/Livewire/**/*.php",
        './packages/namratalohani/attendance-livewire-widget/resources/views/**/*.blade.php', 
    ],
    safelist: [
        {
            pattern:
                /bg-(red|emerald|blue|sky|amber|orange)-(50|100|200|300|400|500|600|700|800|900)/,
            variants: ["hover", "focus", "dark"],
        },
        {
            pattern:
                /text-(red|emerald|blue|sky|amber|orange)-(50|100|200|300|400|500|600|700|800|900)/,
            variants: ["hover", "focus", "dark"],
        },
        {
            pattern:
                /border-(red|emerald|blue|sky|amber|orange)-(50|100|200|300|400|500|600|700|800|900)/,
            variants: ["hover", "focus", "dark"],
        },
    ],
    theme: {
        extend: {
            colors: {
                "agri-orange": "#F15A2C",

                danger: {
                    50: "#FBE5E8",
                    100: "#F7CCD1",
                    200: "#F099A4",
                    300: "#E66678",
                    400: "#DC333B",
                    500: "#AF0B28", 
                    600: "#9E0A24",
                    700: "#8C0920",
                    800: "#7B081B",
                    900: "#6A0717",
                    950: "#580613",
                },

                red: {
                    50: "#FBE5E8",
                    100: "#F7CCD1",
                    200: "#F099A4",
                    300: "#E66678",
                    400: "#DC333B",
                    500: "#AF0B28", // category: equipment
                    600: "#9E0A24",
                    700: "#8C0920",
                    800: "#7B081B",
                    900: "#6A0717",
                    950: "#580613",
                },
                orange: {
                    50: "#FEF0E9",
                    100: "#FDDAD1",
                    200: "#FBAA92",
                    300: "#F87A54",
                    400: "#F54A15",
                    500: "#F15A2C", // category: livestock
                    600: "#DD5328",
                    700: "#C94B24",
                    800: "#B6431F",
                    900: "#A23B1A",
                    950: "#8E3316",
                },
                sky: {
                    50: "#E4F9F9",
                    100: "#CCF2F2",
                    200: "#99E5E5",
                    300: "#66D8D8",
                    400: "#33CCCC",
                    500: "#3ABFBE", // category: property
                    600: "#33ABAA",
                    700: "#2E9797",
                    800: "#298383",
                    900: "#236F6F",
                    950: "#1E5B5B",
                },
                amber: {
                    50: "#FFF3DF",
                    100: "#FFE7BF",
                    200: "#FFD081",
                    300: "#FFB943",
                    400: "#FFA205",
                    500: "#FDB82C", // category: auction
                    600: "#F5B02A",
                    700: "#EB9A26",
                    800: "#E28523",
                    900: "#D86F1F",
                    950: "#CE5A1C",
                },
                emerald: {
                    50: "#EDF6EB",
                    100: "#DBEDD6",
                    200: "#B7DCAE",
                    300: "#93CB85",
                    400: "#6FBA5C",
                    500: "#7DC242", // category: vehicle
                    600: "#6EB83B",
                    700: "#60A534",
                    800: "#52922D",
                    900: "#447F26",
                    950: "#366C1F",
                },
                blue: {
                    50: "#E7EAF8",
                    100: "#CFD5F1",
                    200: "#A0ABDE",
                    300: "#7080CA",
                    400: "#4055B7",
                    500: "#1F328B", // category: other
                    600: "#1C2D7E",
                    700: "#182770",
                    800: "#152263",
                    900: "#111B56",
                    950: "#0E1649",
                },
            },
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
            },
        },
        safelist: [
            {
                pattern:
                    /(red|orange|sky|amber|emerald|blue)-(50|100|200|300|400|500|600|700|800|900|950)/,
            },
        ],
    },

}
