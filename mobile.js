// Переменные для отслеживания текущей позиции
let currentIndex = 0; // Индекс текущего проекта

// Функция для перемещения вперед
function moveForward() {
    if (currentIndex < projectData.length - 1) {
        currentIndex++;
        updateProjectPositions();
    }
}

// Функция для перемещения назад
function moveBackward() {
    if (currentIndex > 0) {
        currentIndex--;
        updateProjectPositions();
    }
}

// Обновление позиций проектов
function updateProjectPositions() {
    projects.forEach((project, index) => {
        project.style.transform = `translateX(${(currentIndex - index) * 100}vw)`; // Обновление позиции
        project.style.opacity = (currentIndex === index) ? '1' : '0'; // Устанавливаем видимость
    });
}

// Открытие модального окна при нажатии на проект
projects.forEach((project, index) => {
    project.addEventListener('click', () => {
        openModal(index);
    });
});

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
