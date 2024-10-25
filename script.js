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
    },
    {
        title: "Project 3",
        description: "Описание третьего проекта. Это очень интересный проект!",
        img: "images/project3.png",
        link: "https://github.com/yourprofile/project3"
    },
    {
        title: "Project 3",
        description: "Описание третьего проекта. Это очень интересный проект!",
        img: "images/project3.png",
        link: "https://github.com/yourprofile/project3"
    },
    {
        title: "Project 3",
        description: "Описание третьего проекта. Это очень интересный проект!",
        img: "images/project3.png",
        link: "https://github.com/yourprofile/project3"
    },
    {
        title: "Project 3",
        description: "Описание третьего проекта. Это очень интересный проект!",
        img: "images/project3.png",
        link: "https://github.com/yourprofile/project3"
    },
    {
        title: "Project 3",
        description: "Описание третьего проекта. Это очень интересный проект!",
        img: "images/project3.png",
        link: "https://github.com/yourprofile/project3"
    }
];

let currentPosition = 0; // Начальная позиция
const speed = 10; // Скорость движения (чем меньше значение, тем медленнее)

// Проверка загрузки скрипта
console.log('Script is loaded');

// Функция для движения вперед
function moveForward() {
    currentPosition -= speed; // Сдвигаем все элементы влево
    updateProjectPositions(); // Обновляем позиции проектов
    console.log('Двигаемся вперед, текущая позиция:', currentPosition);
}

// Функция для движения назад
function moveBackward() {
    currentPosition += speed; // Сдвигаем все элементы вправо
    updateProjectPositions(); // Обновляем позиции проектов
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


// Проверяем, что длина массива projectData соответствует количеству кнопок
if (projects.length > projectData.length) {
    console.warn('Количество кнопок больше, чем количество данных проектов.');
}
else{
    console.log('все норм'); 
}

// Открытие модального окна с деталями проекта
// projects.forEach((project, index) => {
//     console.log('мы в цикле');
//     project.addEventListener('click', () => {
//         console.log('нажата кнопка', projectData[index]);
//         const data = projectData[index];
//         modalImg.src = data.img;
//         modalDescription.textContent = data.description;
//         modalLink.href = data.link;
//         modal.style.display = 'flex'; // Показываем модальное окно
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    // Получаем элементы проектов
    const projects = document.querySelectorAll('.project');
    console.log('Количество кнопок:', projects.length);
    
    // Проверяем, что длина массива projectData соответствует количеству кнопок
    if (projects.length > projectData.length) {
        console.warn('Количество кнопок больше, чем количество данных проектов.');
    } else {
        console.log('все норм'); 
    }

    // Обработка нажатий на кнопки
    projects.forEach((project, index) => {
        console.log(`Обработчик добавлен для кнопки ${index + 1}`);
        project.addEventListener('click', () => {
            if (index < projectData.length) {
                const data = projectData[index];
                console.log('нажата кнопка', data);
                modalImg.src = data.img;
                modalDescription.textContent = data.description;
                modalLink.href = data.link;
                modal.style.display = 'flex'; // Показываем модальное окно
            } else {
                console.error('Нет данных для проекта с индексом:', index);
            }
        });
    });

    // Закрытие модального окна
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none'; // Скрываем модальное окно
        console.log('Модальное окно закрыто');
    });
});


// Закрытие модального окна
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Скрываем модальное окно
});


document.addEventListener('click', (event) => {
    console.log('Click event:', event);
});
