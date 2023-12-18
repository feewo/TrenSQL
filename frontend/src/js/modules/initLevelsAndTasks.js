import removeSpinner from './removeSpinner';
import toggleTasks from './toggleTasks';
import toggleDropdown from './toggleDropdown';

import SQLService from '../service/SQLService';
import Level from '../components/Level';
import Task from '../components/task';

function initLevelsAndTasks(isMainPage) {
    const sqlService = new SQLService();

    sqlService.getLevelsAndTasks()
        .then(result => {
            if (result.data && result.data.length > 0) {
                result.data.forEach((obj, i) => {
                    new Level({
                        parentSelector: '.header__tasks-list',
                        name: obj.lvl,
                    }).renderInHeader();

                    obj.task.forEach((task) => {
                        new Task({
                            parentSelector: `.header__tasks-item:nth-child(${i + 1}) .header__sublist`,
                            link: `/task/${task.id}`,
                            name: task.name,
                        }).renderInHeader();
                    });

                    if (isMainPage) {
                        new Level({
                            parentSelector: '.tasks__list',
                            lvl: obj.score,
                        }).render();

                        obj.task.forEach((task) => {
                            new Task({
                                parentSelector: `.tasks__item:nth-child(${i + 1}) .tasks__sublist`,
                                link: `/task/${task.id}`,
                                name: task.name,
                            }).render();
                        });
                    }
                });

                toggleDropdown();

                toggleTasks();
            } else {
                new Task({
                    parentSelector: '.header__sublist',
                }).renderErrorInHeader();

                if (isMainPage) {
                    new Task({
                        parentSelector: '.tasks__list',
                    }).renderError();
                }
            }
        })
        .catch(() => {
            new Task({
                parentSelector: '.header__sublist',
            }).renderErrorInHeader();

            if (isMainPage) {
                new Task({
                    parentSelector: '.tasks__list',
                }).renderError();
            }
        })
        .finally(() => {
            if (isMainPage) {
                removeSpinner('.tasks .spinner-wrapper');
            }
        });
}

export default initLevelsAndTasks;