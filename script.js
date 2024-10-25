// Элементы для взаимодействия
const car = document.getElementById('car');
const projects = document.querySelectorAll('.project');

// Начальные параметры
let projectIndex = 0; // Текущий индекс проекта

// Функция для появления проекта
function showNextProject() {
    if (projectIndex < projects.length) {
        const project = projects[projectIndex];
        project.style.opacity = 1;
        project.style.transform = 'translateY(0)';
        projectIndex += 1;
    }
}

// Обработка нажатий клавиш
document.addEventListener('keydown', (event) => {
    if (event.key === 'd' || event.key === 'D') {
        showNextProject();
    }
});
