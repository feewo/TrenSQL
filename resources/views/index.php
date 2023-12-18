<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>SQL-тренажер</title>
    <meta name="description" content="Сайт Котласского Речного Училища тренажер SQL">
    <meta name="keywords"
        content="КРУ, Котласское Речное Училище, тренажер sql, sql, задания sql, топ пользователей, список заданий">
    <meta name="robots" content="index, follow">

    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/main.min.css">
</head>

<body>
    <div class="page-wrapper">
        <?php 
            @include 'blocks/header.php'; 
        ?>

        <main class="main">
            <h1 class="sr-only">SQL-тренажер</h1>

            <section class="rating section">
                <div class="container">
                    <h2 class="section__title">
                        <span class="section__title section__title_red">Топ 5</span>поль&shy;зо&shy;ва&shy;те&shy;лей
                    </h2>
                    <div class="preload">
                        <img src="img/rating-1.svg" alt="1 место" class="rating__img">
                        <img src="img/rating-2.svg" alt="2 место" class="rating__img">
                        <img src="img/rating-3.svg" alt="3 место" class="rating__img">
                        <img src="img/rating-4.svg" alt="4 место" class="rating__img">
                        <img src="img/rating-5.svg" alt="5 место" class="rating__img">
                    </div>
                    <?php 
                        @include 'blocks/spinner.php'; 
                    ?>
                    <ol class="rating__list"></ol>
                </div>
            </section>

            <section class="tasks section">
                <div class="container">
                    <h2 class="section__title">Список заданий</h2>
                    <?php 
                        @include 'blocks/spinner.php'; 
                    ?>
                    <ul class="tasks__list"></ul>
                </div>
            </section>
        </main>

        <?php 
            @include 'blocks/footer.php';
        ?>
    </div>

    <script src="js/pages/main.js"></script>
</body>

</html>