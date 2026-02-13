<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') === 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="NJIMOLUXE – Artisanat, meubles sur mesure, rénovation et design intérieur. Découvrez nos réalisations uniques et contactez-nous pour un devis gratuit.">
    <meta name="robots" content="index, follow">
    <meta name="author" content="Frank Kamgang | NJIMOLUXE">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="{{ config('app.name', 'NJIMOLUXE') }}">
    <meta property="og:description" content="NJIMOLUXE – Artisanat, meubles sur mesure, rénovation et design intérieur.">
    <meta property="og:image" content="{{ asset('/njimoluxe.png') }}">
    <meta property="og:url" content="{{ url()->current() }}">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ config('app.name', 'NJIMOLUXE') }}">
    <meta name="twitter:description" content="NJIMOLUXE – Artisanat, meubles sur mesure, rénovation et design intérieur.">
    <meta name="twitter:image" content="{{ asset('/njimoluxe.png') }}">

    <title inertia>{{ config('app.name', 'NJIMOLUXE') }}</title>

    <link rel="icon" href="/njimoluxe.png" sizes="any">
    <link rel="icon" href="/njimoluxe.png" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

    <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
    <link rel="preload" as="style" href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" media="all" onload="this.media='all'">

    <!-- Dark mode script -->
    <script>
        (function() {
            const appearance = '{{ $appearance ?? "system" }}';
            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (prefersDark) document.documentElement.classList.add('dark');
            }
        })();
    </script>

    <!-- Base background color -->
    <style>
        html { background-color: oklch(1 0 0); }
        html.dark { background-color: oklch(0.145 0 0); }
    </style>

    <!-- JSON-LD for SEO / Rich Snippets -->
    <script type="application/ld+json">
      (function() {
        const appearance = @json($appearance ?? 'system');

        if (appearance === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                document.documentElement.classList.add('dark');
            }
        }
    })();
    </script>

    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>
<body class="font-sans antialiased text-gray-900 dark:text-gray-100 bg-white dark:bg-black">
    @inertia
</body>
</html>
