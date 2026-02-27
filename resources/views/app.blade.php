<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') === 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- SEO -->
    <title inertia>{{ config('app.name', 'NJIMOLUXE') }}</title>
    <meta name="description" content="NJIMOLUXE – Artisanat, meubles sur mesure, rénovation et design intérieur. Découvrez nos réalisations uniques et contactez-nous pour un devis gratuit.">
    <meta name="robots" content="index, follow">
    <meta name="author" content="Frank Kamgang | NJIMOLUXE">
    <link rel="canonical" href="{{ url()->current() }}">

    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="{{ config('app.name', 'NJIMOLUXE') }}">
    <meta property="og:description" content="NJIMOLUXE – Artisanat, meubles sur mesure, rénovation et design intérieur.">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:site_name" content="NJIMOLUXE">
    <meta property="og:image" content="{{ asset('/njimoluxe.png') }}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ config('app.name', 'NJIMOLUXE') }}">
    <meta name="twitter:description" content="NJIMOLUXE – Artisanat, meubles sur mesure, rénovation et design intérieur.">
    <meta name="twitter:image" content="{{ asset('/njimoluxe.png') }}">

    <!-- Favicon -->
    <link rel="icon" href="{{ asset('/njimoluxe.png') }}" sizes="any">
    <link rel="apple-touch-icon" href="{{ asset('apple-touch-icon.png') }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet">

    <!-- Dark mode -->
    <script>
        (function () {
            const appearance = '{{ $appearance ?? "system" }}';
            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (prefersDark) document.documentElement.classList.add('dark');
            }
        })();
    </script>

    <style>
        html { background-color: #ffffff; }
        html.dark { background-color: #000000; }
    </style>

    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased text-gray-900 dark:text-gray-100 bg-white dark:bg-black">
    @inertia
</body>

</html>