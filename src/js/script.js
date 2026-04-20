// Получаем элементы
const menuBtn = document.querySelector('.header-fixed .menu-btn');
const menu = document.querySelector('.header-menu');
const closeBtn = document.querySelector('.btn-close');

// Переменная для хранения позиции скролла
let scrollPosition = 0;

// Функция для блокировки прокрутки с сохранением позиции
function disableScroll() {
    scrollPosition = window.pageYOffset;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
}

// Функция для разблокировки прокрутки с восстановлением позиции
function enableScroll() {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
}

// Функция открытия меню
function openMenu() {
    menu.classList.add('active');
    menuBtn.style.display = 'none';
    disableScroll(); // Блокируем прокрутку с сохранением позиции
}

// Функция закрытия меню
function closeMenu() {
    menu.classList.remove('active');
    menuBtn.style.display = 'flex';
    enableScroll(); // Разблокируем прокрутку и восстанавливаем позицию
}

// Открытие по клику на menu-btn
menuBtn.addEventListener('click', openMenu);

// Закрытие по клику на btn-close
closeBtn.addEventListener('click', closeMenu);

// Закрытие по клику вне меню
document.addEventListener('click', function(event) {
    if (menu.classList.contains('active') && 
        !menuBtn.contains(event.target) && 
        !menu.contains(event.target)) {
        closeMenu();
    }
});