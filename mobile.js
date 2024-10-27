// Элементы для взаимодействия
const car = document.getElementById('car');
const projectList = document.createElement('ul'); // Создаем список проектов
document.body.appendChild(projectList); // Добавляем список в тело документа
const modal = document.getElementById('projectModal');
const modalImg = document.getElementById('modalImg');
const modalVideo = document.getElementById('modalVideo');
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
        Приложение объединяет функциональность сенсоров, мультимедийные возможности и веб-контент для удобного взаимодействия с пользователями.`,
        type: "video",
        videoUrl: "videos/androidapp.mp4",
        link: "https://github.com/donteavesdrop/Mirea_Project"
    },
    {
        title: "ProceduralGen",
        description: `Этот проект демонстрирует базовую реализацию процедурной генерации ландшафта с использованием шума Перлина на Python с библиотекой Pygame.<br><br> Генерируется 2D-игровой мир, который делится на чанки, каждый из которых содержит разные типы тайлов (например, почва, пустое пространство, враги, ресурсы). Игрок может перемещаться по миру, и новые чанки создаются динамически по мере того, как игрок приближается к границам текущих загруженных чанков.`,
        type: "image",
        img: "images/gen.png",
        link: "https://github.com/donteavesdrop/ProceduralGen2"
    },
    {
        title: "Hackaton front",
        description: `Проект представляет собой фронтенд-приложение для управления задачами сотрудников в компании.<br><br>Пользователь входит в систему, после чего может выполнять следующие действия:<br><br>
        Управление задачами: просмотр и распределение задач между сотрудниками.<br><br>
        Отчеты: доступ к данным о среднем времени выполнения задач, времени в пути и количеству завершенных задач для каждого сотрудника.<br><br>
        Точки бизнеса: просмотр списка бизнес-точек (например, филиалов или офисов) с их адресами.<br><br>
        Сотрудники: просмотр информации о сотрудниках, включая их имена и должности.<br><br>
        Каждый компонент проверяет наличие токена авторизации, чтобы защитить данные от неавторизованного доступа.`,
        type: "video",
        videoUrl: "videos/react.mp4",
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

// Создаем элементы списка для проектов
projectData.forEach((project, index) => {
    const listItem = document.createElement('li'); // Создаем элемент списка
    listItem.innerHTML = `<strong>${project.title}</strong>: ${project.description}`;
    const projectLink = document.createElement('a');
    projectLink.href = project.link;
    projectLink.target = '_blank';
    projectLink.innerText = 'Ссылка на проект';
    listItem.appendChild(projectLink);

    // Добавляем обработчик события на клик по элементу списка
    listItem.addEventListener('click', () => {
        openModal(index);
    });

    projectList.appendChild(listItem); // Добавляем элемент списка в список проектов
});

// Открытие модального окна при нажатии на проект
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
