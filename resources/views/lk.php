<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>SQL-тренажер - Личный кабинет</title>
    <meta name="description" content="Сайт Котласского Речного Училища тренажер SQL">
    <meta name="keywords"
        content="КРУ, Котласское Речное Училище, тренажер sql, sql, личный кабинет, войти в личный кабинет">
    <meta name="robots" content="index, follow">

    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/css/lk.min.css">
</head>

<body>
    <div class="page-wrapper">
        <?php 
            @include 'blocks/header.php'; 
        ?>

        <main class="main">
            <section class="lk section">
                <div class="container">
                    <h1 class="section__title">
                        <span class="section__title">Личный кабинет</span>
                    </h1>
                    <div class="lk__wrapper">
                        <div class="lk__main">
                            <div class="lk__personal lk__personal_active">
                                <?php 
                                    @include 'blocks/spinner.php'; 
                                ?>
                                <div class="lk__buttons">
                                    <button class="lk__change">Изменить данные</button>
                                    <button class="lk__logout">Выйти</button>
                                </div>
                            </div>
                            <form action="#" class="form form_mt0">
                                <input type="text" class="form__input form__input_fname" name="fname"
                                    placeholder="Фамилия" minlength="2" maxlength="30" required>
                                <input type="text" class="form__input form__input_nname" name="nname" placeholder="Имя"
                                    minlength="2" maxlength="30" required>
                                <input type="text" class="form__input form__input_oname" name="oname"
                                    placeholder="Отчество" minlength="2" maxlength="30" required>
                                <input type="text" class="form__input form__input_group" name="group"
                                    placeholder="Группа" minlength="2" maxlength="30" required>
                                <input type="password" class="form__input" name="password"
                                    placeholder="Пароль. Если пусто, то он будет прежним">
                                <div class="lk__buttons">
                                    <button class="lk__back">Назад</button>
                                    <input type="submit" class="form__submit form__submit_mt0" value="Сохранить">
                                </div>
                            </form>
                            <div class="spinner-wrapper spinner-wrapper_inactive">
                                <div class="spinner"></div>
                            </div>
                            <div class="form__message form__message_mt0 form__message_success">
                                <p class="form__message-text">Данные успешно изменены!</p>
                                <a href="/lk" class="form__message-link">Обновить страницу</a>
                            </div>
                            <div class="form__message form__message_mt0 form__message_error">
                                <p class="form__message-text">Произошла ошибка! Пожалуйста, попробуйте позже.</p>
                                <a href="/lk" class="form__message-link">Обновить страницу</a>
                            </div>
                        </div>
                        <ul class="lk__badges">
                            <li class="lk__badges-item">
                                <img src="img/badge.svg" alt="Выполнить 1 задание"
                                    class="lk__badges-img lk__badges-img_task-1">
                                <span class="lk__badges-text">Выполнить 1 задание</span>
                            </li>
                            <li class="lk__badges-item">
                                <img src="img/badge.svg" alt="Выполнить 10 заданий"
                                    class="lk__badges-img lk__badges-img_task-10">
                                <span class="lk__badges-text">Выполнить 10 заданий</span>
                            </li>
                            <li class="lk__badges-item">
                                <img src="img/badge.svg" alt="Выполнить 50 заданий"
                                    class="lk__badges-img lk__badges-img_task-50">
                                <span class="lk__badges-text">Выполнить 50 заданий</span>
                            </li>
                            <li class="lk__badges-item">
                                <img src="img/badge.svg" alt="Выполнить 100 заданий"
                                    class="lk__badges-img lk__badges-img_task-100">
                                <span class="lk__badges-text">Выполнить 100 заданий</span>
                            </li>
                            <li class="lk__badges-item">
                                <img src="img/badge.svg" alt="Набрать 10 баллов"
                                    class="lk__badges-img lk__badges-img_score-10">
                                <span class="lk__badges-text">Набрать 10 баллов</span>
                            </li>
                            <li class="lk__badges-item">
                                <img src="img/badge.svg" alt="Набрать 50 баллов"
                                    class="lk__badges-img lk__badges-img_score-50">
                                <span class="lk__badges-text">Набрать 50 баллов</span>
                            </li>
                            <li class="lk__badges-item">
                                <img src="img/badge.svg" alt="Набрать 100 баллов"
                                    class="lk__badges-img lk__badges-img_score-100">
                                <span class="lk__badges-text">Набрать 100 баллов</span>
                            </li>
                            <li class="lk__badges-item">
                                <img src="img/badge.svg" alt="Набрать 500 баллов"
                                    class="lk__badges-img lk__badges-img_score-500">
                                <span class="lk__badges-text">Набрать 500 баллов</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>

        <?php 
            @include 'blocks/footer.php';
        ?>
    </div>

    <script src="/js/pages/lk.js"></script>
</body>

</html>