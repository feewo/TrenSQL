<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>SQL-тренажер - Доступ запрещён</title>
    <meta name="description" content="Сайт Котласского Речного Училища тренажер SQL">
    <meta name="keywords" content="КРУ, Котласское Речное Училище, тренажер sql, sql, 403, недостаточно прав">
    <meta name="robots" content="noindex, nofollow">

    <link rel="icon" href="/public/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/public/css/403.min.css">
</head>

<body>
    <div class="page-wrapper">
        <?php 
            @include 'blocks/header.php'; 
        ?>

        <main class="main">
            <h1 class="sr-only">Доступ запрещён</h1>

            <img class="page-403__img" src="/public/img/403.svg" alt="Доступ запрещён">
        </main>

        <?php 
            @include 'blocks/footer.php';
        ?>
    </div>

    <script src="/public/js/pages/403.js"></script>
</body>

</html>