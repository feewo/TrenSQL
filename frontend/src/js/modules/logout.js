import logoutUser from "./logoutUser";

import SQLService from "../service/SQLService";
import ErrorMessage from '../components/errorMessage';

function logout() {
    const btn = document.querySelector('.lk__logout');

    const sqlService = new SQLService();

    btn.addEventListener('click', () => {
        sqlService.logout()
            .then(result => {
                if (result.data === 'User Logged Out') {
                    logoutUser();
                    window.location.href = '/';
                }
            })
            .catch(() => {
                new ErrorMessage('.lk__personal', 'afterend', 'Произошла ошибка! Пожалуйста, попробуйте позже.').render();
            })
    });
}

export default logout;