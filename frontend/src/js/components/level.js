class Level {
    constructor({parentSelector, lvl, name}) {
        this.parent = document.querySelector(parentSelector);
        this.lvl = lvl;
        this.name = name;
    };

    render() {
        this.parent.insertAdjacentHTML('beforeend', `
            <li class="tasks__item">
                <button class="tasks__btn">Cложность <span class="tasks__lvl">${this.lvl}</span> баллов</button>
                <ul class="tasks__sublist"></ul>
            </li>
        `);
    };

    renderInHeader() {
        this.parent.insertAdjacentHTML('beforeend', `
            <li class="header__tasks-item">
                <span class="header__tasks-text">${this.name}</span>
                <ul class="header__sublist"></ul>
            </li>
        `);
    }
}

export default Level;