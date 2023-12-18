'use strict';
import initHeaderUser from '../modules/initHeaderUser';
import initLevelsAndTasks from '../modules/initLevelsAndTasks';
import submitForm from '../modules/submitForm';

document.addEventListener('DOMContentLoaded', () => {
    initHeaderUser();

    initLevelsAndTasks();

    submitForm({
        formSelector: '.form',
        url: 'api/auth/signup',
        messageSuccessSelector: '.form__message_success',
        messageErrorSelector: '.form__message_error',
        messageLoginUsedSelector: '.form__message_login-used',
        spinnerSelector: '.registration .spinner-wrapper',
    });
});
