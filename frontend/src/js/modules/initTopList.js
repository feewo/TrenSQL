import removeSpinner from './removeSpinner';

import SQLService from '../service/SQLService';
import Student from '../components/student';
import ErrorMessage from '../components/errorMessage';

function initTopList() {
    // создаем экземпляр класса
    const sqlService = new SQLService();

    sqlService.getTopList()
        .then(result => {
            removeSpinner('.rating .spinner-wrapper');

            if (result && result.length > 0 && result[0].user !== null && result[0].score !== null) {
                result.forEach((obj, i) => {
                    new Student({
                        parentSelector: '.rating__list',
                        liClass: 'rating__item',      
                        nameClass: 'rating__name',
                        name: obj.user,
                        scoreClass: 'rating__score',
                        score: obj.score, 
                        hasImg: true,
                        index: i,
                        hasComma: true
                    }).render();
                });
            } else {
                new ErrorMessage('.rating__list').render();
            }
        })
        .catch(() => {
            removeSpinner('.rating .spinner-wrapper');
            
            new ErrorMessage('.rating__list', 'afterend', 'Произошла ошибка! Пожалуйста, попробуйте позже.').render();
        });
        
}

export default initTopList;