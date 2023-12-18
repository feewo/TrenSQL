function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}

function openModal({
    modalSelector, 
    modalActiveClass,
    overflow = 'hidden',
    hasScroll = true,
    }) {
    const modal = document.querySelector(modalSelector);
    let scroll;

    if (hasScroll) {
        scroll = calcScroll();
    }

    modal.classList.add(modalActiveClass);
    document.body.style.overflow = overflow;
    document.body.style.marginRight = `${scroll}px`;
}

function closeModal({
    modalSelector, 
    modalActiveClass,
    closeOnClickOnBg = true,
    automatically = false
    }) {
    const modal = document.querySelector(modalSelector);

    function close() {
        modal.classList.remove(modalActiveClass);
        document.body.style.overflow = '';
        document.body.style.marginRight = 0;
    }

    document.addEventListener('keydown', e => {
        if (e.code === "Escape" && modal.classList.contains(modalActiveClass)) {
            close();
        }
    });

    modal.addEventListener('click', e => {
        if (e.target.closest('.modal__close')) {
            close();
        }
    });

    if (closeOnClickOnBg) {
        document.addEventListener('click', e => {
            if (e.target === modal) {
                close();
            }
        });
    }

    if (automatically) {
        close();
    }
}

function toggleModal({
    modalSelector,
    modalActiveClass,
    modalBtnSelector,
    closeOnClickOnBg, 
    overflow,
    hasScroll,
    automatically
    }) {
    document.querySelectorAll(modalBtnSelector).forEach(btn => {
        btn.addEventListener('click', () => {
            openModal({
                modalSelector, 
                modalActiveClass,
                overflow,
                hasScroll,
            });
            closeModal({
                modalSelector, 
                modalActiveClass,
                closeOnClickOnBg,
                automatically
            });
        });
    });
}

export {openModal, closeModal, toggleModal};