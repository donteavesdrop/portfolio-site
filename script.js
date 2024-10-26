// Элементы для взаимодействия
const car = document.getElementById('car');
const projects = document.querySelectorAll('.project');
const projectDescriptions = document.querySelectorAll('.project-description');
const modal = document.getElementById('projectModal');
const modalImg = document.getElementById('modalImg');
const modalDescription = document.getElementById('modalDescription');
const modalLink = document.getElementById('modalLink');
const closeModal = document.querySelector('.close');

// Данные о проектах
const projectData = [
    {
        title: "Android App Demo",
        description: `Это Android-приложение, разработанное на Java с использованием архитектуры MVVM. Приложение имеет боковое меню для быстрой навигации, реализованное с помощью Navigation Drawer и Navigation Component, что упрощает переходы между фрагментами.<br><br>

Главный экран использует View Binding для безопасного доступа к элементам интерфейса. Приложение включает следующие фрагменты:<br><br>

- UserProfile: управление профилем, запись и воспроизведение аудио, съемка фото, сохранение данных в SQLite.<br><br>
- SensorManagerFragment: отображает доступные сенсоры устройства в ListView с именем и максимальным диапазоном.<br><br>
- OrientationSensor: отслеживает углы ориентации устройства и обновляет значения в реальном времени с объяснением терминов.<br><br>
- SlideshowFragment: отображает веб-контент через WebView, загружая альбомы группы Thousand Foot Krutch с включенным JavaScript.<br><br>

Приложение объединяет функциональность сенсоров, мультимедийные возможности и веб-контент для удобного взаимодействия с пользователями.

`,
        type: "video", // Указываем, что это видео
        videoUrl: "videos/androidapp.mp4", // Ссылка на видео файл
       // img: "images/project1.png",
        link: "https://github.com/donteavesdrop/Mirea_Project"
    },
    {
        title: "Project 2",
        description: "Описание второго проекта. Еще один классный проект!",
        type: "image", 
        img: "images/project2.png",
        link: "https://github.com/yourprofile/project2"
    },
    {
        title: "Project 3",
        description: "Описание третьего проекта. Это очень интересный проект!",
        type: "image", 
        img: "images/project3.png",
        link: "https://github.com/yourprofile/project3"
    },
    {
        title: "Project 4",
        description: "Описание третьего проекта. Это очень интересный проект!",
        type: "image", 
        img: "images/project4.png",
        link: "https://github.com/yourprofile/project4"
    }
];

//let currentPosition = 0;
//const speed = 10;

console.log('Script is loaded');

// Начальная позиция
let currentPosition = 0;
let visibleIndex = -1; // Индекс последнего видимого проекта
const speed = 25; // Задайте скорость движения

//const projects = document.querySelectorAll('.project'); // Все проекты
//const projectDescriptions = document.querySelectorAll('.project-description'); // Описания проектов

// Функция для движения вперед
function moveForward() {
    if (visibleIndex < projects.length - 1) {
        visibleIndex++; // Показать следующий проект
        projects[visibleIndex].classList.add('visible'); // Добавляем класс для плавного появления
    }
    currentPosition -= speed; // Двигаем позицию
    updateProjectPositions();
    console.log('Двигаемся вперед, текущая позиция:', currentPosition);
}

// Функция для движения назад
function moveBackward() {
    if (visibleIndex > 0) {
        visibleIndex--; // Скрыть предыдущий проект
        projects[visibleIndex + 1].classList.remove('visible'); // Убираем класс видимости у следующего проекта
    }
    currentPosition += speed; // Двигаем позицию
    updateProjectPositions();
    console.log('Двигаемся назад, текущая позиция:', currentPosition);
}

// Функция для обновления позиций проектов и описаний
function updateProjectPositions() {
    projects.forEach((project, index) => {
        project.style.transform = `translateX(${currentPosition}px)`;
        projectDescriptions[index].style.transform = `translateX(${currentPosition}px)`;
    });
}

// Обработка нажатий клавиш с учетом русской раскладки
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key === 'd' || key === 'в') {
        moveForward();
    } else if (key === 'a' || key === 'ф') {
        moveBackward();
    }
});


document.addEventListener('DOMContentLoaded', () => {
    console.log('Количество кнопок:', projects.length);

    if (projects.length > projectData.length) {
        console.warn('Количество кнопок больше, чем количество данных проектов.');
    } else {
        console.log('Все нормально, количество совпадает.');
    }

    
});

// Обработка нажатий на кнопки
projects.forEach((project, index) => {
    console.log(`Обработчик добавлен для кнопки ${index + 1}`);
    
    // Check if the project data exists for this index
    if (index < projectData.length) {
        project.addEventListener('click', () => {
            const data = projectData[index];
            console.log('Нажата кнопка', data);
            // Скрываем оба элемента (изображение и видео) и очищаем их значения
            modalImg.style.display = 'none';
            modalVideo.style.display = 'none';
            modalImg.src = '';
            modalVideo.src = '';

            modalDescription.innerHTML = data.description;
            modalLink.href = data.link;
            
            // Проверяем тип контента
            if (data.type === "image") {
            modalImg.src = data.img; // Устанавливаем изображение
            modalImg.style.display = 'block'; // Делаем изображение видимым
            } else if (data.type === "video") {
            modalVideo.src = data.videoUrl; // Устанавливаем видео
            modalVideo.style.display = 'block'; // Делаем видео видимым
            }

            // Отображение модального окна
            modal.style.display = 'flex';
        });
    } else {
        console.error('Нет данных для проекта с индексом:', index);
    }
});

// Закрытие модального окна
if (closeModal) {
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    console.log('Модальное окно закрыто');
});
}
if (closeModal) {
// Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        console.log('Модальное окно закрыто');
    }
});
}
