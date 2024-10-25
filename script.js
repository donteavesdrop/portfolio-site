// Элементы для взаимодействия
const car = document.getElementById('car');
const projects = document.querySelectorAll('.project');

// Начальные параметры
let carPosition = 0; // Начальная позиция машинки
let projectIndex = 0; // Текущий индекс проекта

// Функция для перемещения машинки
function moveCar(direction) {
    const moveDistance = 100; // Расстояние перемещения за одно нажатие

    // Перемещаем машинку
    if (direction === 'right') {
        carPosition += moveDistance;
    } else if (direction === 'left' && carPosition > 0) {
        carPosition -= moveDistance;
    }

    // Обновляем позицию машинки
    car.style.transform = `translateX(${carPosition}px)`;

    // Показываем следующий проект, если машинка прошла определённое расстояние
    if (carPosition >= (projectIndex + 1) * 200 && projectIndex < projects.length) {
        showProject(projects[projectIndex]);
        projectIndex += 1;
    }
}

// Функция для плавного появления проекта
function showProject(project) {
    project.style.opacity = 1;
    project.style.transform = `translateY(50px)`;
}

// Обработка нажатий клавиш
document.addEventListener('keydown', (event) => {
    if (event.key === 'd' || event.key === 'D') {
        moveCar('right');
    }
    if (event.key === 'a' || event.key === 'A') {
        moveCar('left');
    }
});
