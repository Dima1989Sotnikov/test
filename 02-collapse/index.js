const elem = document.querySelector('.collapsible__content');
const btn = document.querySelector('.collapsible__button');
const btnTextVisible = document.querySelector('.collapsible__action--visible');
const btnTextHidden = document.querySelector('.collapsible__action--hidden');
btnTextHidden.style.display = 'none';

// отрабатывает при клике на кнопку
btn.addEventListener('click', () => {
    toggle();
});

// проверяет скрыта ли кнопка с надписью "показать содержимое"
function isVisible() {
    return btnTextHidden.style.display === 'none';
}

// скрывает / раскрывает содержимое меняя свойство "display" элементов
function toggle() {
    elem.style.display = isVisible() ? 'none' : 'block';
    btnTextVisible.style.display = isVisible() ? 'none' : 'block';
    btnTextHidden.style.display = isVisible() ? 'block' : 'none';
}