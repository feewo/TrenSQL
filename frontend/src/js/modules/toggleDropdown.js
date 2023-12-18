function toggleDropdown() {
    const btn = document.querySelector('.header__btn');
    const btnActiveClass = 'header__btn_active';
    const tasksList = document.querySelector('.header__tasks-list');
    const tasksListActiveClass = 'header__tasks-list_active';

    btn.addEventListener('click', () => {
        btn.classList.toggle(btnActiveClass);
        tasksList.classList.toggle(tasksListActiveClass);

        document.addEventListener('click', (e) => {
            // если мы кликнули вне выпадающего списка
            if (e.target && !e.target.closest('.header__tasks-wrapper')) {
                btn.classList.remove(btnActiveClass);
                tasksList.classList.remove(tasksListActiveClass);
            }
        });
    });
}

export default toggleDropdown;