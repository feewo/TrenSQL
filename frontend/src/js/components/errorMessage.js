class ErrorMessage {
    constructor(parentSelector, position = 'afterend', message = 'К сожалению, данные отсутствуют.') {
        this.parent = document.querySelector(parentSelector);
        this.position = position;
        this.message = message;
    };

    render() {
        this.parent.insertAdjacentHTML(this.position, `
            <span class="error">${this.message}</span>
        `);
    };
}

export default ErrorMessage;