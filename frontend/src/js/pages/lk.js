'use strict';
import initHeaderUser from '../modules/initHeaderUser';
import initLkUser from '../modules/initLkUser';
import initLkAchievements from '../modules/initLkAchievements';
import initLevelsAndTasks from '../modules/initLevelsAndTasks';
import toggleForm from '../modules/toggleForm';
import submitForm from '../modules/submitForm';
import logout from '../modules/logout';

document.addEventListener('DOMContentLoaded', () => {
    initHeaderUser();

    initLkUser();

    initLkAchievements();

    initLevelsAndTasks();

    toggleForm();

    submitForm({
        formSelector: '.lk .form',
        url: 'api/user-update',
        messageSuccessSelector: '.lk .form__message_success',
        messageErrorSelector: '.lk .form__message_error',
        spinnerSelector: '.lk .spinner-wrapper',
        update: true
    });

    logout();
});
