function toggleTabs() {
    // все кнопки
    const btns = document.querySelectorAll('.tabheader__item-btn');
    // класс активности кнопки
    const btnActiveClass = 'tabheader__item-btn_active';
    // весь контент
    const contents = document.querySelectorAll('.tabcontent__item');
    // класс активности контента
    const contentActiveClass = 'tabcontent__item_active';

    // перебираем все кнопки
    btns.forEach((btn, i) => {
        // отслеживаем клик по каждой кнопке
        btn.addEventListener('click', () => {
            // когда это происходит, то у всех кнопок
            btns.forEach((btn) => {
                // убираем класс активности
                btn.classList.remove(btnActiveClass);
            });
            // и добавляем класс активности той кнопке, по которой кликнули
            btn.classList.add(btnActiveClass);

            // также перебираем весь контент 
            contents.forEach(content => {
                // убираем класс активности
                content.classList.remove(contentActiveClass);
            });
            // и если кликнули по кнопке номер i, то контенту номер i даем класс активности
            contents[i].classList.add(contentActiveClass);
        });
    });
}

export default toggleTabs;