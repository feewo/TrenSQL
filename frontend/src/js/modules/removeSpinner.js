function removeSpinner(spinnerSelector) {
    const spinner = document.querySelector(spinnerSelector);
    spinner.classList.add('spinner-wrapper_inactive');
}

export default removeSpinner;