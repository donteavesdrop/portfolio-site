// Элементы для взаимодействия
const car = document.getElementById('car');
const projects = document.querySelectorAll('.project');
const title = document.querySelector('.title');
const modal = document.getElementById('projectModal');
const modalImg = document.getElementById('modalImg');
const modalDescription = document.getElementById('modalDescription');
const modalLink = document.getElementById('modalLink');
const closeModal = document.querySelector('.close');

// Данные о проектах
const projectData = [
    {
        title: "Project 1",
        description: "Описание первого проекта. Это очень крутой проект!",
        img: "images/project1.png",
        link: "https://github.com/yourprofile/project1"
    },
    {
        title: "Project 2",
        description: "Описание второго проекта. Еще один классный проект!",
        img: "images/project2.png",
        link: "https://github.com/yourprofile/project2"
    },
    {
        title: "Project 3",
        description: "Описание третьего проекта. Это очень интересный проект!",
        img: "images/project3.png",
        link: "https://github.com/yourprofile/project3"
    }
];

// Начальные параметры
let currentPosition = 0; // Текущая позиция всех элементов (заголовок + проекты)
const speed = 10; // Скорость движения (чем меньше значение, тем медленнее)

// Проверка загрузки скрипта
console.log('Script is loaded');

// Функция для движения вперед
function moveForward() {
    currentPosition -= speed; // Сдвигаем все элементы влево

    // Сдвигаем заголовок
    title.style.transform = `translateX(${currentPosition}px)`;

    // Сдвигаем каждый проект
    projects.forEach(project => {
        project.style.transform = `translateX(${currentPosition}px)`;
    });

    console.log('Двигаемся вперед, текущая позиция:', currentPosition);
}

// Функция для движения назад
function moveBackward() {
    currentPosition += speed; // Сдвигаем все элементы вправо

    // Сдвигаем заголовок
    title.style.transform = `translateX(${currentPosition}px)`;

    // Сдвигаем каждый проект
    projects.forEach(project => {
        project.style.transform = `translateX(${currentPosition}px)`;
    });

    console.log('Двигаемся назад, текущая позиция:', currentPosition);
}

// Обработка нажатий клавиш с учетом русской раскладки
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key === 'd' || key === 'в') {
        moveForward();
    }
    if (key === 'a' || key === 'ф') {
        moveBackward();
    }
});

// Открытие модального окна с деталями проекта
projects.forEach((project, index) => {
    project.addEventListener('click', () => {
        const data = projectData[index];
        modalImg.src = data.img;
        modalDescription.textContent = data.description;
        modalLink.href = data.link;
        modal.style.display = 'flex'; // Показываем модальное окно
    });
});

// Закрытие модального окна
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
