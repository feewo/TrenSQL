import removeSpinner from './removeSpinner';
import getCookie from './getCookie';

import HeaderUser from '../components/headerUser';

function initHeaderUser() {
    removeSpinner('.header .spinner-wrapper');

    if (getCookie('token')) {
        new HeaderUser({
            fname: `${getCookie('fname')}`,
            nname: `${getCookie('nname')}`,
            score: `${getCookie('score')}`,
            isLoggedIn: true,
        }).render();
    } else {
        new HeaderUser({
            isLoggedIn: false,
        }).render();
    }
}

export default initHeaderUser;