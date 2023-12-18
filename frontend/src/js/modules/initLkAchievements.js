import getCookie from './getCookie';

import SQLService from '../service/SQLService';
import ErrorMessage from '../components/errorMessage';

function initLkAchievements() {
    const sqlService = new SQLService();

    const achievementTask1 = document.querySelector('.lk__badges-img_task-1');
    const achievementTask10 = document.querySelector('.lk__badges-img_task-10');
    const achievementTask50 = document.querySelector('.lk__badges-img_task-50');
    const achievementTask100 = document.querySelector('.lk__badges-img_task-100');
    const achievementScore10 = document.querySelector('.lk__badges-img_score-10');
    const achievementScore50 = document.querySelector('.lk__badges-img_score-50');
    const achievementScore100 = document.querySelector('.lk__badges-img_score-100');
    const achievementScore500 = document.querySelector('.lk__badges-img_score-500');
    const achievementActive = '/img/badge-active.svg';
    const totalScore = getCookie('score');
    let totalTask;

    sqlService.getLkAchievements()
        .then(result => {
            totalTask = result.task_count;

            if (totalTask >= 1) achievementTask1.src = achievementActive;
            if (totalTask >= 10) achievementTask10.src = achievementActive;
            if (totalTask >= 50) achievementTask50.src = achievementActive;
            if (totalTask >= 100) achievementTask100.src = achievementActive;
        })
        .catch(() => {
            new ErrorMessage('.lk__main', 'afterend', 'Произошла ошибка! Пожалуйста, попробуйте позже.').render();
        });

    if (totalScore >= 10) achievementScore10.src = achievementActive;
    if (totalScore >= 50) achievementScore50.src = achievementActive;
    if (totalScore >= 100) achievementScore100.src = achievementActive;
    if (totalScore >= 500) achievementScore500.src = achievementActive;
}

export default initLkAchievements;