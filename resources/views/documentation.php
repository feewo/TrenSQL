<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>SQL-тренажер - Документация</title>
    <meta name="description" content="Сайт Котласского Речного Училища тренажер SQL">
    <meta name="keywords"
        content="КРУ, Котласское Речное Училище, тренажер sql, sql, документация, справка, читать документацию">
    <meta name="robots" content="index, follow">

    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/css/documentation.min.css">
</head>

<body>
    <div class="page-wrapper">
        <?php 
            @include 'blocks/header.php'; 
        ?>

        <main class="main">
            <section class="documentation section">
                <div class="container">
                    <h1 class="section__title">
                        <span class="section__title">Документация</span>
                    </h1>
                    <h2 class="documentation__subtitle">Главная страница</h2>
                    <div class="documentation__descr">
                        <img src="/img/index.PNG" alt="Главная">
                        <p>1. Служит для возврата на главную страницу;</p>
                        <p>2. Открывает страницу с топами всех студентов;</p>
                        <p>3. Переход в личный кабинет или (если вы не залогинились) на страницу "Вход в личный
                            кабинет";</p>
                        <p>4. Кнопки перехода к заданиям;</p>
                        <p>5. Ссылка на документацию сайта.</p>
                    </div>
                    <h2 class="documentation__subtitle">Личный кабинет</h2>
                    <div class="documentation__descr">
                        <img src="/img/lk.PNG" alt="Личный кабинет 1">
                        <img src="/img/lk2.PNG" alt="Личный кабинет 2">
                        <p>1. Служит для возврата на главную страницу;</p>
                        <p>2. Открывает страницу с топами всех студентов;</p>
                        <p>3. Кнопки перехода к заданиям;</p>
                        <p>4. Переход в личный кабинет или (если вы не залогинились) на страницу "Вход в личный
                            кабинет";</p>
                        <p>5. Ссылка на документацию сайта;</p>
                        <p>6. Выйти из аккаунта;</p>
                        <p>7. Изменить данные аккаунта (фамилия, имя, отчество, группа, пароль);</p>
                        <p>8. (После нажатия на кнопку 7) поля для изменения данных;</p>
                        <p>9. (После нажатия на кнопку 7) кнопка для сохранения введенных данных;</p>
                        <p>10. (После нажатия на кнопку 7) отмена изменений.</p>
                    </div>
                    <h2 class="documentation__subtitle">Топ пользователей</h2>
                    <div class="documentation__descr">
                        <img src="/img/top.PNG" alt="Топ">
                        <p>1. Служит для возврата на главную страницу;</p>
                        <p>2. Открывает страницу с топами всех студентов;</p>
                        <p>3. Кнопки перехода к заданиям;</p>
                        <p>4. Переход в личный кабинет или (если вы не залогинились) на страницу "Вход в личный
                            кабинет";</p>
                        <p>5. Ссылка на документацию сайта;</p>
                        <p>6. Переход к общему топу;</p>
                        <p>7. Переход к прошлогоднему топу;</p>
                        <p>8. Переход к топу текущего года.</p>
                    </div>
                    <h2 class="documentation__subtitle">Вход в личный
                        кабинет</h2>
                    <div class="documentation__descr">
                        <img src="/img/login.PNG" alt="Вход в личный кабинет">
                        <p>1. Служит для возврата на главную страницу;</p>
                        <p>2. Открывает страницу с топами всех студентов;</p>
                        <p>3. Кнопки перехода к заданиям;</p>
                        <p>4. Переход в личный кабинет или (если вы не заходились) на страницу "Вход в личный
                            кабинет";</p>
                        <p>5. Ссылка на документацию сайта;</p>
                        <p>6. Поля для ввода информации о пользователе;</p>
                        <p>7. Кнопка входа в аккаунт;</p>
                        <p>8. Зарегистрировать нового пользователя.</p>
                    </div>
                    <h2 class="documentation__subtitle">Регистрация</h2>
                    <div class="documentation__descr">
                        <img src="/img/register.PNG" alt="Регистрация">
                        <p>1. Служит для возврата на главную страницу;</p>
                        <p>2. Открывает страницу с топами всех студентов;</p>
                        <p>3. Кнопки перехода к заданиям;</p>
                        <p>4. Переход в личный кабинет или (если вы не залогинились) на страницу "Вход в личный
                            кабинет";</p>
                        <p>5. Ссылка на документацию сайта;</p>
                        <p>6. Поля для ввода информации о пользователе;</p>
                        <p>7. Кнопка для регистрации пользователя;</p>
                    </div>
                </div>
            </section>
        </main>

        <?php 
            @include 'blocks/footer.php';
        ?>
    </div>

    <script src="/js/pages/documentation.js"></script>
</body>

</html>