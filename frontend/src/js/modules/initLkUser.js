import removeSpinner from './removeSpinner';
import getCookie from './getCookie';

import LkUser from '../components/lkUser';

function initLkUser() {
    removeSpinner('.lk__personal .spinner-wrapper');

    if (getCookie('token')) {
        new LkUser({
            fname: `${getCookie('fname')}`,
            nname: `${getCookie('nname')}`,
            oname: `${getCookie('oname')}`,
            group: `${getCookie('group')}`,
            score: `${getCookie('score')}`,
            isLoggedIn: true,
        }).render();

        const inputFName = document.querySelector('.form__input_fname');
        const inputNName = document.querySelector('.form__input_nname');
        const inputOName = document.querySelector('.form__input_oname');
        const inputGroup = document.querySelector('.form__input_group');

        inputFName.value = getCookie('fname');
        inputNName.value = getCookie('nname');
        inputOName.value = getCookie('oname');
        inputGroup.value = getCookie('group');
    } else {
        new LkUser({
            isLoggedIn: false,
        }).render();
    }
} 

export default initLkUser;