// Элементы для взаимодействия
const locations = document.querySelectorAll('.location');
const overlay = document.getElementById('overlay');
const closeOverlay = document.getElementById('closeOverlay');

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
