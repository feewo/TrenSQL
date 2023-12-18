class Student {
    constructor({parentSelector, liClass, nameClass, name, scoreClass, score, hasImg, index, hasComma}) {
        this.parent = document.querySelector(parentSelector);
        this.liClass = liClass;
        this.nameClass = nameClass;
        this.name = name;
        this.scoreClass = scoreClass;
        this.score = score;

        this.img = hasImg 
            ? `<img src="img/rating-${index + 1}.svg" alt="${index + 1} место" class="rating__img">`
            : '';

        this.comma = hasComma
            ? ',&nbsp;'
            : '';
    };

    render() {
        this.parent.insertAdjacentHTML('beforeend', `
            <li class="${this.liClass}">
                ${this.img}
                <span class="${this.nameClass}">${this.name}${this.comma}</span>
                <span class="${this.scoreClass}">${this.score} баллов</span> 
            </li>
        `);
    };
}

export default Student;