import getCookie from "./getCookie";
import setCookie from "./setCookie";
import setUser from "./setUser";
import updateUser from "./updateUser";
import { openModal, closeModal } from './toggleModal';

function submitForm({
    formSelector,
    url,
    modifyURL = false,
    requestMethod = 'POST',
    messageSuccessSelector,
    messageErrorSelector,
    messageLoginUsedSelector,
    messageWrongDataSelector,
    modalSuccessSelector,
    modalWrongSelector,
    modalErrorSelector,
    spinnerSelector,
    hideForm = true,
    redirect,
    cookie,
    update,
    withToken = false,
}) {
    const form = document.querySelector(formSelector);
    const formInactiveClass = 'form_inactive';
    const messageSuccess = document.querySelector(messageSuccessSelector);
    const messageError = document.querySelector(messageErrorSelector);
    const messageLoginUsed = document.querySelector(messageLoginUsedSelector);
    const messageWrongData = document.querySelector(messageWrongDataSelector);
    const modalSuccess = document.querySelector(modalSuccessSelector);
    const modalWrong = document.querySelector(modalWrongSelector);
    const modalError = document.querySelector(modalErrorSelector);
    // const modalActiveClass = 'modal_active';
    const totalScore = document.querySelector('.modal__total-result')
    const messageActiveClass = 'form__message_active';
    const spinner = document.querySelector(spinnerSelector);
    const spinnerActiveClass = 'spinner-wrapper_active';
    const spinnerInactiveClass = 'spinner-wrapper_inactive';
    const token = withToken
        ? `Bearer ${getCookie('token')}`
        : `Bearer Error`;

    // для того, чтобы изменить данные, запрос должен выглядеть следующим образом
    // api/admin/level/1?lvl=Легкие&score=5
    // в связи с этим была создана функция ниже
    function initModifyURL() {
        if (modifyURL) {
            const inputs = document.querySelectorAll('[data-input]');

            let newUrl = '?';

            inputs.forEach((input, i) => {
                if (i > 0) newUrl += '&';

                newUrl += `${input.name}=${input.value.trim()}`;
            });

            return newUrl;
        } else {
            return '';
        }
    }

    // функция, которая непосредственно занимается отправкой формы
    async function postData(url, data) {
        const response = await fetch(`${url}${initModifyURL()}`, {
            headers: {
                'Authorization': token,
                'X-API-KEY': '9v5-QpF?JlNlVEXux!3qu/c02G/YZKkOjX0OqZ04PssQvczStQitTeawtdrou/yyHh5/qotI!fBfBKLlnuY-EW7u6=bi/PeCujc6VnYf?m9bNS7Aa7RfXfi7aFK?!ms!RYNpTlBkD8dW-YF-G4ofTJ63sXXjKdtR9C?yMQc88D4HYu0Gj23IuqtDz7abNcJZ3l5O3!WM7WXU!ALZgbLC!PlpuoLnFa71gbuiLqhrOBIiIsye0FDOOaT3pnSZpaef',
            },
            // метод, с помощью которого отправляется форма. или POST, или GET
            method: requestMethod,
            // данные, которые мы отправляем на сервер
            body: data,
        });

        console.log(response)

        if (!response.ok) {
            const result = await response.json();

            console.log('СКАЗАНО, ЧТО:', result)
            if (response.status === 400 && result.message === 'The login has already been taken.') {
                throw new Error(`Логин занят`);
            }
            if (response.status === 401 &&
                (result.message === 'The selected login is invalid.' || result.message === 'Credentials mismatch')) {
                throw new Error(`Неверные данные`);
            }
            if (response.status === 500) {
                throw new Error(`Ошибка сервера`);
            }

            throw new Error(`Произошла ошибка в запросе. Статус сервера: ${response.status}`);
        }

        const result = await response.json();

        console.log('СКАЗАНО, ЧТО:', result)

        if (result.message === false) {
            throw new Error('Ответ неверный')
        }

        if (cookie) {
            setUser(result);
        }

        if (update) {
            updateUser(result);
        }

        return result;
    };

    form.addEventListener('submit', function (e) {
        // отмена перезагрузки страницы при отправке формы по умолчанию
        e.preventDefault();

        spinner.classList.remove(spinnerInactiveClass);
        spinner.classList.add(spinnerActiveClass);

        const formData = new FormData(form);

        postData(url, formData)
            // если форма успешно отправлена
            .then((result) => {
                console.log('УСПЕХ')
                if (redirect) {
                    document.location.href = "/";
                }

                if (hideForm) {
                    form.classList.add(formInactiveClass);
                }

                if (messageLoginUsed) {
                    messageLoginUsed.classList.remove(messageActiveClass);
                }

                if (messageError) {
                    messageError.classList.remove(messageActiveClass);
                }

                if (messageWrongData) {
                    messageWrongData.classList.remove(messageActiveClass);
                }

                if (messageSuccess) {
                    messageSuccess.classList.add(messageActiveClass)
                };

                if (modalSuccess) {
                    console.log('ОТКРЫВАЕМ МОДАЛОЧКИ')
                    openModal({
                        modalSelector: modalSuccessSelector,
                        modalActiveClass: 'modal_active',
                    });

                    closeModal({
                        modalSelector: modalSuccessSelector,
                        modalActiveClass: 'modal_active',
                    });

                    totalScore.textContent = result.score;

                    setCookie(
                        'score',
                        `${result.score}`,
                    );
                }
            })
            // если форма отправлена неуспешно
            .catch((error) => {
                console.log('ОШИБКА')
                console.log(error.message)
                if (error.message === 'Логин занят' && messageLoginUsed) {
                    messageLoginUsed.classList.add(messageActiveClass);
                } else if (error.message === 'Неверные данные' && messageWrongData) {
                    messageWrongData.classList.add(messageActiveClass);
                } else if (error.message === 'Ответ неверный' && modalWrong) {
                    openModal({
                        modalSelector: modalWrongSelector,
                        modalActiveClass: 'modal_active',
                    });

                    closeModal({
                        modalSelector: modalWrongSelector,
                        modalActiveClass: 'modal_active',
                    });
                } else if (error.message === 'Ошибка сервера' && modalError) {
                    console.log('ЭТО ОШИБКА СЕРВЕРА')
                    openModal({
                        modalSelector: modalErrorSelector,
                        modalActiveClass: 'modal_active',
                    });

                    closeModal({
                        modalSelector: modalErrorSelector,
                        modalActiveClass: 'modal_active',
                    });
                } else if (messageError) {
                    messageError.classList.add(messageActiveClass);
                };
            })
            // в любом случае независимо от того, успешно или неуспешно
            .finally(() => {
                spinner.classList.remove(spinnerActiveClass);
                spinner.classList.add(spinnerInactiveClass);
            });
    });
};

export default submitForm;
