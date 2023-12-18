import removeSpinner from './removeSpinner';

import SQLService from '../service/SQLService';
import Student from '../components/student';
import ErrorMessage from '../components/errorMessage';

function initGeneralList() {
    const sqlService = new SQLService();

    sqlService.getGeneralList()
        .then(result => {
            removeSpinner('.tabcontent__item_general-list .spinner-wrapper');

            if (result && result.length > 0) {
                result.forEach((obj) => {
                    new Student({
                        parentSelector: '.general__list',
                        liClass: 'top__item',      
                        nameClass: 'top__item-name',
                        name: obj.user,
                        scoreClass: 'top__item-score',
                        score: obj.score
                    }).render();
                });
            } else {
                new ErrorMessage('.general__list').render();
            }
        })
        .catch(() => {
            removeSpinner('.tabcontent__item_general-list .spinner-wrapper');
            
            new ErrorMessage('.general__list', 'afterend', 'Произошла ошибка! Пожалуйста, попробуйте позже.').render();
        });
}

export default initGeneralList;