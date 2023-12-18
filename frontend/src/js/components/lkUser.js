class LkUser {
    constructor({fname, nname, oname, group, score, isLoggedIn}) {
        this.fname = fname;
        this.nname = nname;
        this.oname = oname;
        this.group = group;
        this.score = score;
        this.user = isLoggedIn 
            ? `
                <ul class="lk__info">
                    <li class="lk__info-item">
                        <span class="lk__info-title">Фамилия</span>
                        <span class="lk__info-value lk__info-value_nname">${this.fname}</span>
                    </li>
                    <li class="lk__info-item">
                        <span class="lk__info-title">Имя</span>
                        <span class="lk__info-value lk__info-value_fname">${this.nname}</span>
                    </li>
                    <li class="lk__info-item">
                        <span class="lk__info-title">Отчество</span>
                        <span class="lk__info-value lk__info-value_oname">${this.oname}</span>
                    </li>
                    <li class="lk__info-item">
                        <span class="lk__info-title">Группа</span>
                        <span class="lk__info-value lk__info-value_group">${this.group}</span>
                    </li>
                    <li class="lk__info-item">
                        <span class="lk__info-title">Количество баллов</span>
                        <span class="lk__info-value lk__info-value_score">${this.score}</span>
                    </li>
                </ul>`
            : `<span class="lk__error">Возникла ошибка!</span>`;
    };

    render() {
        document.querySelector('.lk__personal').insertAdjacentHTML('afterbegin', `
            ${this.user}
        `);
    };
}

export default LkUser;
