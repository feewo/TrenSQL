class HeaderUser {
    constructor({fname, nname, score, isLoggedIn}) {
        this.fname = fname;
        this.nname = nname;
        this.score = score;
        this.user = isLoggedIn 
            ? `
                <span class="header__user-fname">${this.fname}</span>
                <span class="header__user-nname">${this.nname},</span>
                <span class="header__user-number">${this.score}</span>
                <span class="header__user-score">баллов</span>`
            : `<span class="header__user-text">Войдите в личный кабинет</span>`;
    };

    render() {
        document.querySelector('.header__user').insertAdjacentHTML('afterbegin', `
            ${this.user}
        `);
    };
}

export default HeaderUser;