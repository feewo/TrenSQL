class Task {
    constructor({parentSelector, link, name}) {
        this.parent = document.querySelector(parentSelector);
        this.link = link;
        this.name = name;
    };

    render() {
        this.parent.insertAdjacentHTML('beforeend', `
            <li class="tasks__subitem">
                <a href="${this.link}" class="tasks__subitem-link">${this.name}</a>   
            </li>
        `);
    };

    renderInHeader() {
        this.parent.insertAdjacentHTML('beforeend', `
            <li class="header__sublist-item">
                <a href="${this.link}" class="header__sublist-link">${this.name}</a>
            </li>
        `);
    }

    renderError() {
        this.parent.insertAdjacentHTML('beforeend', `
            <li class="tasks__subitem tasks__subitem_error">
                <span class="error error_task">К сожалению, данные отсутствуют.</span>  
            </li>
        `);
    };

    renderErrorInHeader() {
        this.parent.insertAdjacentHTML('beforeend', `
            <li class="header__sublist-item">
                <span class="error error_header">К сожалению, данные отсутствуют.</span>  
            </li>
        `);
    }
}

export default Task;