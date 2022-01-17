<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ config('app.name') }}</title>
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
</head>

<body>
    <style>
        .rc-anchor-normal-footer {
	display: none !important;
}
.grecaptcha-badge {
	visibility: hidden;
}
    </style>
    <div id="app"></div>
    <script>
        window.Urls = @json([
            'api' => url('/api')
        ]);
    </script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>