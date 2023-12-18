'use strict';
import initHeaderUser from '../modules/initHeaderUser';
import initLevelsAndTasks from '../modules/initLevelsAndTasks';
import submitForm from '../modules/submitForm';

document.addEventListener('DOMContentLoaded', () => {
    initHeaderUser();

    initLevelsAndTasks();

    submitForm({
        formSelector: '.form',
        url: 'api/auth/login',
        messageWrongDataSelector: '.form__message_wrongdata',
        spinnerSelector: '.authorization .spinner-wrapper',
        cookie: true,
        redirect: true
    });
});
