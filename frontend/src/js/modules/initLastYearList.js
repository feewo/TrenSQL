import removeSpinner from './removeSpinner';

import SQLService from '../service/SQLService';
import Student from '../components/student';
import ErrorMessage from '../components/errorMessage';

function initLastYearList() {
    const sqlService = new SQLService();

    sqlService.getLastYearList()
        .then(result => {
            removeSpinner('.tabcontent__item_last-year .spinner-wrapper');

            if (result && result.length > 0) {
                result.forEach((obj) => {
                    new Student({
                        parentSelector: '.last-year__list',
                        liClass: 'top__item',      
                        nameClass: 'top__item-name',
                        name: obj.user,
                        scoreClass: 'top__item-score',
                        score: obj.score
                    }).render();
                });
            } else {
                new ErrorMessage('.last-year__list').render();
            }
        })
        .catch(() => {
            removeSpinner('.tabcontent__item_last-year .spinner-wrapper');
            
            new ErrorMessage('.last-year__list', 'afterend', 'Произошла ошибка! Пожалуйста, попробуйте позже.').render();
        });
}

export default initLastYearList;