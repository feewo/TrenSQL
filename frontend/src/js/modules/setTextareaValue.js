function setTextareaValue(editor) {
    editor.on('change', () => {
        document.querySelector('.task__textarea').value = editor.getValue();
    });
}

export default setTextareaValue;