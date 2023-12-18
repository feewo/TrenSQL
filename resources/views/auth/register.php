<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>SQL-тренажер - Регистрация</title>
    <meta name="description" content="Сайт Котласского Речного Училища тренажер SQL">
    <meta name="keywords" content="КРУ, Котласское Речное Училище, тренажер sql, sql, зарегистрироваться, регистрация">
    <meta name="robots" content="index, follow">

    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/registration.min.css">
</head>

<body>
    <div class="page-wrapper">
        <?php
            @include 'blocks/header.php';
        ?>

        <main class="main">
            <section class="registration section">
                <div class="container">
                    <h1 class="section__title">
                        <span class="section__title" data-test>Регистрация</span>
                    </h1>
                    <form action="#" class="form">
                        <!-- тип поля ввода - тектовое поле = type="text"
                        required = обязательно -->
                        <input type="text" class="form__input" name="fname" placeholder="Фамилия" minlength="2"
                            maxlength="30" required>
                        <input type="text" class="form__input" name="nname" placeholder="Имя" minlength="2"
                            maxlength="30" required>
                        <input type="text" class="form__input" name="oname" placeholder="Отчество" minlength="2"
                            maxlength="30" required>
                        <input type="text" class="form__input" name="group" placeholder="Группа" minlength="2"
                            maxlength="30" required>
                        <input type="text" class="form__input" name="login" placeholder="Логин" minlength="2"
                            maxlength="30" required>
                        <input type="password" class="form__input" name="password" placeholder="Пароль" minlength="6"
                            maxlength="30" required>
                        <input type="submit" class="form__submit" value="Зарегистрироваться">
                    </form>
                    <div class="spinner-wrapper spinner-wrapper_inactive">
                        <div class="spinner"></div>
                    </div>
                    <div class="form__message form__message_success">
                        <p class="form__message-text">Вы успешно зарегистрировались!</p>
                        <a href="login" class="form__message-link">Авторизоваться</a>
                    </div>
                    <div class="form__message form__message_error">
                        <p class="form__message-text">Произошла ошибка! Пожалуйста, попробуйте позже.</p>
                    </div>
                    <div class="form__message form__message_login-used">
                        <p class="form__message-text">Логин занят! Пожалуйста, выберите новый.</p>
                    </div>
                </div>
            </section>
        </main>

        <?php
            @include 'blocks/footer.php';
        ?>
    </div>

    <script src="js/pages/registration.js"></script>
</body>

</html>
