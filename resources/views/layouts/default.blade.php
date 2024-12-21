<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ $title ?? 'Attendance Widget' }}</title>

    <!-- Include the package CSS -->
    <link rel="stylesheet" href="/build/assets/app.css">

    @livewireStyles
    @stack('styles')
</head>
<body class="bg-gray-100 dark:bg-gray-900">
    <div class="container mx-auto py-8">
        {{ $slot }}
    </div>

    @livewireScripts
    @stack('scripts')
</body>
</html>
