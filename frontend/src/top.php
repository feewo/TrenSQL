<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>SQL-тренажер - Топ студентов</title>
    <meta name="description" content="Сайт Котласского Речного Училища тренажер SQL">
    <meta name="keywords"
        content="КРУ, Котласское Речное Училище, тренажер sql, sql, топ пользователей, топ прошлый год, общий топ, топ текущий год">
    <meta name="robots" content="index, follow">

    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/top.min.css">
</head>

<body>
    <div class="page-wrapper">
        <?php 
            @include 'blocks/header.php'; 
        ?>

        <main class="main">
            <section class="top section">
                <div class="container">
                    <h1 class="section__title">
                        <span class="section__title section__title_red">Топ</span>студентов
                    </h1>
                    <ul class="tabheader__list">
                        <li class="tabheader__item">
                            <button class="tabheader__item-btn tabheader__item-btn_active">Общий топ</button>
                        </li>
                        <li class="tabheader__item">
                            <button class="tabheader__item-btn last-year__btn">Прошлый год</button>
                        </li>
                        <li class="tabheader__item">
                            <button class="tabheader__item-btn current-year__btn">Текущий год</button>
                        </li>
                    </ul>
                    <ul class="tabcontent__list">
                        <li class="tabcontent__item tabcontent__item_active tabcontent__item_general-list">
                            <?php 
                                @include 'blocks/spinner.php'; 
                            ?>
                            <ul class="top__list general__list"></ul>
                        </li>
                        <li class="tabcontent__item tabcontent__item_last-year">
                            <?php 
                                @include 'blocks/spinner.php'; 
                            ?>
                            <ul class="top__list last-year__list"></ul>
                        </li>
                        <li class="tabcontent__item tabcontent__item_current-year">
                            <?php 
                                @include 'blocks/spinner.php'; 
                            ?>
                            <ul class="top__list current-year__list"></ul>
                        </li>
                    </ul>
                </div>
            </section>
        </main>

        <?php 
            @include 'blocks/footer.php';
        ?>
    </div>

    <script src="js/pages/top.js"></script>
</body>

</html>