import getSlug from './getSlug';
import setTextareaValue from './setTextareaValue';
import removeSpinner from './removeSpinner';
import submitForm from './submitForm';

import SQLService from '../service/SQLService';
import TaskPage from '../components/taskPage';
import ErrorMessage from '../components/errorMessage';

function initTaskPage() {
    const sqlService = new SQLService();

    const taskId = getSlug(0);

    sqlService.getTask(taskId)
        .then(result => {
            removeSpinner('.task .spinner-wrapper');

            if (result) {
                new TaskPage({
                    title: result.data.name,
                    difficulty: result.data.lvl,
                    description: result.data.task,
                    img: result.data.img,
                    isSolved: result.solved
                }).render();

                const editor = CodeMirror.fromTextArea(document.querySelector('.task__textarea'), {
                    mode: 'sql',
                    theme: '3024-day',
                    lineNumbers: true,
                    lineWrapping: true
                });

                setTextareaValue(editor);

                submitForm({
                    formSelector: '.task__form',
                    url: `../api/taskCheck/${getSlug(0)}`,
                    modalSuccessSelector: '.modal_success',
                    modalWrongSelector: '.modal_wrong',
                    modalErrorSelector: '.modal_error',
                    spinnerSelector: '.task__form .spinner-wrapper',
                    hideForm: false,
                    withToken: true
                });
            } else {
                new ErrorMessage('.main .container', 'afterbegin').render();
            }
        })
        .catch(() => {
            removeSpinner('.task .spinner-wrapper');

            new ErrorMessage('.main .container', 'afterbegin', 'Произошла ошибка! Пожалуйста, попробуйте позже.').render();
        })
}

export default initTaskPage;