'use strict';
import initHeaderUser from '../modules/initHeaderUser';
import initTaskPage from '../modules/initTaskPage';
import initLevelsAndTasks from '../modules/initLevelsAndTasks';

document.addEventListener('DOMContentLoaded', () => {
    initHeaderUser();

    initTaskPage();

    initLevelsAndTasks();
});
