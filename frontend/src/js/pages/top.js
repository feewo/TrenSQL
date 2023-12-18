'use strict';
import initHeaderUser from '../modules/initHeaderUser';
import initLevelsAndTasks from '../modules/initLevelsAndTasks';
import toggleTabs from '../modules/toggleTabs';
import initGeneralList from '../modules/initGeneralList';
import initLastYearList from '../modules/initLastYearList';
import initCurrentYearList from '../modules/initCurrentYearList';

document.addEventListener('DOMContentLoaded', () => {
    initHeaderUser();

    initLevelsAndTasks();

    toggleTabs();

    initGeneralList();

    initLastYearList();

    initCurrentYearList();
});
