<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>SQL-тренажер - Название задания</title>
    <meta name="description" content="Сайт Котласского Речного Училища тренажер SQL">
    <meta name="keywords"
        content="КРУ, Котласское Речное Училище, тренажер sql, sql, решить задание, описание задания, задание">
    <meta name="robots" content="index, follow">

    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/css/task.min.css">
    <link rel="stylesheet" href="/codemirror/lib/codemirror.css">
    <link rel="stylesheet" href="/codemirror/theme/3024-day.css">
</head>

<body>
    <div class="page-wrapper">
        <?php 
            @include 'blocks/header.php'; 
        ?>

        <main class="main">
            <section class="task">
                <div class="container">
                    <?php 
                        @include 'blocks/spinner.php'; 
                    ?>
                </div>
                <div class="spinner-wrapper spinner-wrapper_inactive">
                    <div class="spinner"></div>
                </div>
            </section>
            <div class="modal modal_success">
                <div class="modal__container">
                    <button class="modal__close" aria-label="Закрыть модальное окно">×</button>
                    <p class="modal__text">Ответ правильный. Вы успешно решили задание!</p>
                    <span class="modal__total">Ваш итоговый результат: <span class="modal__total-result"></span>
                        баллов</span>
                    <a href="/" class="modal__link">На главную</a>
                </div>
            </div>
            <div class="modal modal_wrong">
                <div class="modal__container">
                    <button class="modal__close" aria-label="Закрыть модальное окно">×</button>
                    <p class="modal__text">Ответ неправильный. Попробуйте ещё раз!</p>
                    <a href="/" class="modal__link">На главную</a>
                </div>
            </div>
            <div class="modal modal_error">
                <div class="modal__container">
                    <button class="modal__close" aria-label="Закрыть модальное окно">×</button>
                    <p class="modal__text">Произошла ошибка (на сервере)! Пожалуйста, попробуйте позже.</p>
                    <a href="/" class="modal__link">На главную</a>
                </div>
            </div>
        </main>

        <?php 
            @include 'blocks/footer.php'; 
        ?>
    </div>

    <script src="/js/pages/task.js"></script>
    <script src="/codemirror/lib/codemirror.js"></script>
    <script src="/codemirror/mode/sql/sql.js"></script>
</body>

</html>