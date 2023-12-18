<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>SQL-тренажер - Авторизация</title>
    <meta name="description" content="Сайт Котласского Речного Училища тренажер SQL">
    <meta name="keywords" content="КРУ, Котласское Речное Училище, тренажер sql, sql, авторизоваться, авторизация">
    <meta name="robots" content="index, follow">
    
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/authorization.min.css">
</head>
<body>
    <div class="page-wrapper">
        <?php 
            @include 'blocks/header.php'; 
        ?>

        <main class="main">
            <h1 class="sr-only">Авторизация</h1>
            
            <section class="authorization section">
                <div class="container">
                    <h2 class="section__title">
                        <span class="section__title">Вход в личный ка&shy;би&shy;нет</span>
                    </h2>
                    <form action="#" class="form">
                        <!-- тип поля ввода - тектовое поле = type="text" -->
                        <!-- required = обязательно -->
                        <input 
                            type="text" 
                            class="form__input"
                            name="login"
                            placeholder="Логин"
                            minlength="2"
                            maxlength="30"
                            required>
                        <input 
                            type="password" 
                            class="form__input"
                            name="password"
                            placeholder="Пароль"
                            minlength="6"
                            maxlength="30"
                            required>
                        <div class="form__buttons">
                            <input type="submit" class="form__submit" value="Войти">
                            <a href="register" class="form__link">Зарегистрироваться</a>
                        </div>
                    </form>
                    <div class="spinner-wrapper spinner-wrapper_inactive">
                        <div class="spinner"></div>
                    </div>
                    <div class="form__message form__message_wrongdata">
                        <p class="form__message-text">Данные не подходят! Проверьте их и попробуйте снова.</p>
                    </div>
                </div>
            </section>
        </main>

        <?php 
            @include 'blocks/footer.php';
        ?>
    </div>

    <script src="js/pages/authorization.js"></script>
</body>
</html>