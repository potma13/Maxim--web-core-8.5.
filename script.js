const expandBtn = document.querySelector('.expand');
const expandText = expandBtn.querySelector('.expand__text');
const expandIcon = expandBtn.querySelector('.expand__icon img');
const brandBoxes = document.querySelectorAll('.brand__box');

// Функция для определения количества видимых элементов
function getVisibleCount() {
    if (window.innerWidth >= 1120) {
        return 8; // Для 1120px+ показываем 8 элементов
    } else if (window.innerWidth >= 768) {
        return 6; // Для 768px+ показываем 6 элементов
    } else {
        return brandBoxes.length; // Для мобильных показываем все
    }
}

// Функция для скрытия/показа элементов
function toggleElements() {
    const visibleCount = getVisibleCount();
    let allHidden = true;
    
    // Проверяем, скрыты ли дополнительные элементы
    for (let i = visibleCount; i < brandBoxes.length; i++) {
        if (brandBoxes[i].style.display !== 'none') {
            allHidden = false;
            break;
        }
    }
    
    // Переключаем видимость
    for (let i = visibleCount; i < brandBoxes.length; i++) {
        if (allHidden) {
            brandBoxes[i].style.display = 'flex'; // Показываем
        } else {
            brandBoxes[i].style.display = 'none'; // Скрываем
        }
    }
    
    // Меняем текст кнопки и иконку
    if (allHidden) {
        expandText.textContent = 'Скрыть';
        expandIcon.src = 'icons/icon_up.png'; // Иконка "вверх"
    } else {
        expandText.textContent = 'Показать всё';
        expandIcon.src = 'icons/icon_down.png'; // Иконка "вниз"
    }
}

// Изначальная настройка
function initElements() {
    const visibleCount = getVisibleCount();
    
    for (let i = 0; i < brandBoxes.length; i++) {
        if (i < visibleCount) {
            brandBoxes[i].style.display = 'flex'; // Показываем
        } else {
            brandBoxes[i].style.display = 'none'; // Скрываем
        }
    }
    
    // Устанавливаем начальные значения
    expandText.textContent = 'Показать всё';
    expandIcon.src = 'icons/icon_down.png'; // Начальная иконка "вниз"
}

// Обработчик клика
expandBtn.addEventListener('click', toggleElements);

// Обработчик изменения размера окна
window.addEventListener('resize', function() {
    initElements();
    // При изменении размера всегда возвращаем к состоянию "Показать всё"
    expandText.textContent = 'Показать всё';
    expandIcon.src = 'icons/icon_down.png';
});

// Инициализация при загрузке
initElements();