'use strict';
import initHeaderUser from '../modules/initHeaderUser';
import initTopList from '../modules/initTopList';
import initLevelsAndTasks from '../modules/initLevelsAndTasks';

document.addEventListener('DOMContentLoaded', () => {
    initHeaderUser();

    initTopList();

    initLevelsAndTasks(true);
});




