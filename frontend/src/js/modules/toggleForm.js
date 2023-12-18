function toggleForm() {
    const btnChange = document.querySelector('.lk__change');
    const btnBack = document.querySelector('.lk__back');
    const personal = document.querySelector('.lk__personal');
    const personalActiveClass = 'lk__personal_active';
    const form = document.querySelector('.form');
    const formActiveClass = 'form_active';

    btnChange.addEventListener('click', () => {
        personal.classList.remove(personalActiveClass);
        form.classList.add(formActiveClass);
    });

    btnBack.addEventListener('click', (e) => {
        e.preventDefault();
        
        personal.classList.add(personalActiveClass);
        form.classList.remove(formActiveClass);
    });
}

export default toggleForm;