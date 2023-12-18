import removeSpinner from './removeSpinner';

import SQLService from '../service/SQLService';
import Student from '../components/student';
import ErrorMessage from '../components/errorMessage';

function initCurrentList() {
    const sqlService = new SQLService();

    sqlService.getCurrentYearList()
        .then(result => {
            removeSpinner('.tabcontent__item_current-year .spinner-wrapper');

            if (result && result.length > 0) {
                result.forEach((obj) => {
                    new Student({
                        parentSelector: '.current-year__list',
                        liClass: 'top__item',      
                        nameClass: 'top__item-name',
                        name: obj.user,
                        scoreClass: 'top__item-score',
                        score: obj.score
                    }).render();
                });
            } else {
                new ErrorMessage('.current-year__list').render();
            }
        })
        .catch(() => {
            removeSpinner('.tabcontent__item_current-year .spinner-wrapper');
            
            new ErrorMessage('.current-year__list', 'afterend', 'Произошла ошибка! Пожалуйста, попробуйте позже.').render();
        });
}

export default initCurrentList;