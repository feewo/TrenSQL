class TaskPage {
    constructor({title, difficulty, description, img, isSolved}) {
        this.title = title;
        this.difficulty = difficulty;
        this.description = description;
        this.img = img;
        this.note = isSolved
            ? '<p class="task__note">Вы уже решили это задание! При повторном решении Вы получите 0 баллов.</p>'
            : '';
    };

    render() {
        document.querySelector('.task .container').insertAdjacentHTML('afterbegin', `
            <h1 class="section__title">${this.title}</h1>
            <span class="task__difficulty">Сложность ${this.difficulty} баллов</span>
            ${this.note}
            <img class="task__img" src="/img/${this.img}" alt="${this.title}">
            <form action="#" class="task__form">
                <p class="task__descr">${this.description}</p>
                <textarea
                    class="task__textarea"
                    placeholder="Введите текст..."
                    minlength="2"
                    maxlength="1000"
                    name="result"
                    required></textarea>
                    <div class="spinner-wrapper spinner-wrapper_inactive">
                        <div class="spinner"></div>
                    </div>
                <div class="task__btns">
                    <a href="/" class="task__link">Отложить</a>
                    <input class="task__submit" type="submit" value="Отправить">
                </div>
            </form>
        `);
    };
}

export default TaskPage;
