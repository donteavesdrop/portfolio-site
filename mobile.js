// Переменные для отслеживания касаний
let startX = 0; 
let endX = 0;

// Функция для начала отслеживания касания
function handleTouchStart(event) {
    startX = event.touches[0].clientX; // Координата X начала касания
}

// Функция для завершения отслеживания касания
function handleTouchEnd(event) {
    endX = event.changedTouches[0].clientX; // Координата X конца касания
    // Проверяем направление свайпа
    if (startX > endX + 50) {
        moveForward(); // Свайп влево — переходим к следующему проекту
    } else if (startX < endX - 50) {
        moveBackward(); // Свайп вправо — возвращаемся к предыдущему проекту
    }
}

// Обновление позиций проектов
function updateProjectPositions() {
    projects.forEach((project, index) => {
        project.style.transform = `translateX(${currentPosition + index * 100}vw)`; // Обновление позиции
    });
}

// Добавляем слушатели событий касания к контейнеру body
document.body.addEventListener('touchstart', handleTouchStart, false);
document.body.addEventListener('touchend', handleTouchEnd, false);

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
