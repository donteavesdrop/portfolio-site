// Элементы для взаимодействия
const locations = document.querySelectorAll('.location');
const overlay = document.getElementById('overlay');
const closeOverlay = document.getElementById('closeOverlay');
const car = document.getElementById('car');

// Определите позицию каждого проекта
const positions = {
    project1: { x: 30, y: 20 }, // Позиция Project 1
    project2: { x: 60, y: 50 }, // Позиция Project 2
    project3: { x: 40, y: 80 }  // Позиция Project 3
};

// Функция для открытия модального окна с информацией о проекте
locations.forEach(location => {
    location.addEventListener('click', () => {
        overlay.style.display = 'flex';
        document.querySelector('.overlay-content h2').innerText = location.innerText;
        document.querySelector('.overlay-content p').innerText = `Description of ${location.innerText}`;
    });
});

// Закрытие модального окна при клике на "x"
closeOverlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Анимация машинки с использованием GSAP и ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Создаем анимацию машинки, которая будет двигаться по проектам при прокрутке
const carAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: ".map",
        start: "top top", // Начало анимации
        end: "bottom top", // Конец анимации
        scrub: true, // Связывает прокрутку с анимацией
        pin: true, // Закрепляет элемент на экране
        markers: true // Для отладки, покажите маркеры начала и конца
    }
});

// Анимация перемещения машинки
carAnimation.to(car, {
    xPercent: positions.project1.x, // Замените координаты по необходимости
    yPercent: positions.project1.y,
    duration: 1
}).to(car, {
    xPercent: positions.project2.x,
    yPercent: positions.project2.y,
    duration: 1
}).to(car, {
    xPercent: positions.project3.x,
    yPercent: positions.project3.y,
    duration: 1
});
