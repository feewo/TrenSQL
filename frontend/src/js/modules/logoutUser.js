import deleteCookie from './deleteCookie';

function logoutUser() {
    deleteCookie('token');
    deleteCookie('login');
    deleteCookie('fname');
    deleteCookie('nname');
    deleteCookie('oname');
    deleteCookie('group');
    deleteCookie('score');
}

export default logoutUser;