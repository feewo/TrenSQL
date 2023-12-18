import getCookie from "../modules/getCookie";

class SQLService {
    _apiBase = '/api/';

    // общий метод, который делает запрос на сервер
    getResource = async (url, options) => {
        const response = await fetch(url, {
            headers: {
                'X-API-KEY': '9v5-QpF?JlNlVEXux!3qu/c02G/YZKkOjX0OqZ04PssQvczStQitTeawtdrou/yyHh5/qotI!fBfBKLlnuY-EW7u6=bi/PeCujc6VnYf?m9bNS7Aa7RfXfi7aFK?!ms!RYNpTlBkD8dW-YF-G4ofTJ63sXXjKdtR9C?yMQc88D4HYu0Gj23IuqtDz7abNcJZ3l5O3!WM7WXU!ALZgbLC!PlpuoLnFa71gbuiLqhrOBIiIsye0FDOOaT3pnSZpaef',
            },
            ...options
        });

        // console.log(response)

        // если мы получаем какой-то плохой ответ с кодом не равным 200
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        const result = await response.json();

        // console.log(result);

        // объект, который мы получили с сервера из формата json преобразуем в обычный js-объект
        return result;
    };
    // !!!!!!!!!!!!!!!!!
    // -----------------
    //       USER
    // -----------------
    // метод для того, чтобы получить участников топ 5
    getTopList = async () => {
        const response = await this.getResource(`${this._apiBase}user-top5`);

        return response;
    };

    // метод для того, чтобы получить топ участников нынешнего года
    getGeneralList = async () => {
        const response = await this.getResource(`${this._apiBase}user-top`);

        return response;
    };

    // метод для того, чтобы получить топ участников прошлого года
    getLastYearList = async () => {
        const response = await this.getResource(`${this._apiBase}user-lasttop`);

        return response;
    };

    // метод для того, чтобы получить общий топ участников
    getCurrentYearList = async () => {
        const response = await this.getResource(`${this._apiBase}user-nowtop`);

        return response;
    };

    // !!!!!!!!!!!!!!!!!
    // -----------------
    //       AUTH
    // -----------------
    // метод для того, чтобы получить одно задание
    getTask = async (id) => {
        const response = await this.getResource(`${this._apiBase}task/${id}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': '9v5-QpF?JlNlVEXux!3qu/c02G/YZKkOjX0OqZ04PssQvczStQitTeawtdrou/yyHh5/qotI!fBfBKLlnuY-EW7u6=bi/PeCujc6VnYf?m9bNS7Aa7RfXfi7aFK?!ms!RYNpTlBkD8dW-YF-G4ofTJ63sXXjKdtR9C?yMQc88D4HYu0Gj23IuqtDz7abNcJZ3l5O3!WM7WXU!ALZgbLC!PlpuoLnFa71gbuiLqhrOBIiIsye0FDOOaT3pnSZpaef',
                'Authorization': `Bearer ${getCookie('token')}`,
                'Content-Type': 'application/json',
            },
        });

        return response;
    };

    // метод для того, чтобы получить список уровней сложности
    getLevelsAndTasks = async () => {
        const response = await this.getResource(`${this._apiBase}levels`, {
            method: 'GET',
        });

        return response;
    };

    // метод для того, чтобы залогинить пользователя
    getHeaderUser = async () => {
        const response = await this.getResource(`${this._apiBase}auth/login`, {
            method: 'GET',
            headers: {
                'X-API-KEY': '9v5-QpF?JlNlVEXux!3qu/c02G/YZKkOjX0OqZ04PssQvczStQitTeawtdrou/yyHh5/qotI!fBfBKLlnuY-EW7u6=bi/PeCujc6VnYf?m9bNS7Aa7RfXfi7aFK?!ms!RYNpTlBkD8dW-YF-G4ofTJ63sXXjKdtR9C?yMQc88D4HYu0Gj23IuqtDz7abNcJZ3l5O3!WM7WXU!ALZgbLC!PlpuoLnFa71gbuiLqhrOBIiIsye0FDOOaT3pnSZpaef',
                'Authorization': `Bearer ${getCookie('token')}`,
                'Content-Type': 'application/json',
            }
        });

        return response;
    };

    logout = async () => {
        const response = await this.getResource(`${this._apiBase}logout`, {
            method: 'GET',
        });

        return response;
    };

    getLkAchievements = async () => {
        const response = await this.getResource(`${this._apiBase}task-user-count`, {
            method: 'GET',
        });

        return response;
    };


    // !!!!!!!!!!!!!!!!!
    // -----------------
    //     ADMIN-PANEL
    // -----------------
    // метод для того, чтобы получить количество зарегистрированных пользователей
    getUserAmount = async () => {
        const response = await this.getResource(`${this._apiBase}admin/user-count`, {
            method: 'GET',
        });

        return response;
    };

    // метод для того, чтобы получить количество решенных заданий
    getSolvedTasksAmount = async () => {
        const response = await this.getResource(`${this._apiBase}admin/task-count`, {
            method: 'GET',
        });

        return response;
    };

    // метод для того, чтобы получить все записи из таблицы "Base"/"Level"/"Role"/"Session"/"Task"/"User"
    getTableList = async (table) => {
        const response = await this.getResource(`${this._apiBase}admin/${table}`, {
            method: 'GET',
        });

        return response;
    };
    // метод для того, чтобы получить одну запись из таблицы "Base"/"Level"/"Role"/"Session"/"Task"/"User"
    getTablePage = async (id, table) => {
        const response = await this.getResource(`${this._apiBase}admin/${table}/${id}`, {
            method: 'GET',
        });

        return response;
    };
    // метод для того, чтобы удалить одну запись из таблицы "Base"/"Level"/"Role"/"Session"/"Task"/"User"
    deleteTable = async (id, table) => {
        const response = await this.getResource(`${this._apiBase}admin/${table}/${id}`, {
            method: 'DELETE',
        });

        return response;
    };

    // ------------------------
    //   ADMIN-PANEL -> выпадающие списки
    // ------------------------

    // метод для того, чтобы получить данные для выпадающих списков при добавлении/редактировании таблицы
    getSelect = async (select) => {
        const response = await this.getResource(`${this._apiBase}admin/${select}`, {
            method: 'GET',
        });

        return response;
    };
};

export default SQLService;
