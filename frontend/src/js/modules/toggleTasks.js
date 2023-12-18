function toggleTasks() {
    const btns = document.querySelectorAll('.tasks__btn');
    const tasksLists = document.querySelectorAll('.tasks__sublist');

    tasksLists.forEach(tasksList => {
        tasksList.style.maxHeight = '0px';
    });

    function countTransitionDuration(i) {
        return `${+tasksLists[i].style.maxHeight.slice(0, -2) / 300 * 0.1 + 0.3}s`;
    }

    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            tasksLists[i].classList.toggle('tasks__sublist_active');
            btns[i].classList.toggle('tasks__btn_active');

            if (tasksLists[i].style.maxHeight === '' || tasksLists[i].style.maxHeight === '0px') {
                tasksLists[i].style.maxHeight = tasksLists[i].scrollHeight + "px";
                tasksLists[i].style.transitionDuration = countTransitionDuration(i);
            } else {
                tasksLists[i].style.maxHeight = 0;
            } 
        });
    });
}

export default toggleTasks;