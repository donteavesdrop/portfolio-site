// Элементы для взаимодействия
const car = document.getElementById('car');
const projects = document.querySelectorAll('.project');
const projectDescriptions = document.querySelectorAll('.project-description');
const modal = document.getElementById('projectModal');
const modalImg = document.getElementById('modalImg');
const modalDescription = document.getElementById('modalDescription');
const modalLink = document.getElementById('modalLink');
const closeModal = document.querySelector('.close');
const controlsDiv = document.getElementById('controls');

controlsDiv.innerHTML = 'УПРАВЛЕНИЕ <br><br>Пролистните, чтобы увидеть проекты :З<br>Названия кликабельны';
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
        title: "ProceduralGen",
        description: `Этот проект демонстрирует базовую реализацию процедурной генерации ландшафта с использованием шума Перлина на Python с библиотекой Pygame.<br><br> Генерируется 2D-игровой мир, который делится на чанки, каждый из которых содержит разные типы тайлов <br>(например, почва, пустое пространство, враги, ресурсы). <br>Игрок может перемещаться по миру, и новые чанки создаются динамически по мере того, как игрок приближается к границам текущих загруженных чанков.
        `,
        type: "image", 
        img: "images/gen.png",
        link: "https://github.com/donteavesdrop/ProceduralGen2"
    },
    {
        title: "Hackaton front",
        description: `
        Проект представляет собой фронтенд-приложение для управления задачами сотрудников в компании. <br><br>Пользователь входит в систему, после чего может выполнять следующие действия:<br><br>
        
        Управление задачами: просмотр и распределение задач между сотрудниками.<br><br>
        Отчеты: доступ к данным о среднем времени выполнения задач, времени в пути и количеству завершенных задач для каждого сотрудника.<br><br>
        Точки бизнеса: просмотр списка бизнес-точек (например, филиалов или офисов) с их адресами.<br><br>
        Сотрудники: просмотр информации о сотрудниках, включая их имена и должности.<br><br>
        Каждый компонент проверяет наличие токена авторизации, чтобы защитить данные от неавторизованного доступа.
        `,
        type: "video", 
        videoUrl: "videos/react.mp4", // Ссылка на видео файл
        link: "https://github.com/donteavesdrop/hackaton-front"
    },
    {
        title: "Генеративно-состязательные сети",
        description: "Обучение GAN",
        type: "ipynb", 
        notebookUrl: 'gan.html',
        link: "https://github.com/donteavesdrop/generative-models/tree/main"
    }
];


// Обработчики событий для кнопок навигации
document.getElementById('btn-left').addEventListener('click', moveBackward);
document.getElementById('btn-right').addEventListener('click', moveForward);

// Открытие модального окна при нажатии на проект
projects.forEach((project, index) => {
    project.addEventListener('click', () => {
        openModal(index);
    });
});

function openModal(index) {
    modal.style.display = 'flex';
    if (projectData[index].type === 'video') {
        modalImg.style.display = 'none';
        modalVideo.src = projectData[index].videoUrl;
        modalVideo.style.display = 'block';
    } else if (projectData[index].type === 'image') {
        modalVideo.style.display = 'none';
        modalImg.src = projectData[index].img;
        modalImg.style.display = 'block';
    }
    modalDescription.innerHTML = projectData[index].description;
    modalLink.href = projectData[index].link;
}

// Закрытие модального окна
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modalVideo.pause(); // Останавливаем видео при закрытии модального окна
});

// Скрываем модальное окно при клике вне его
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        modalVideo.pause(); // Останавливаем видео
    }
});
