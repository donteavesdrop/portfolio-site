const projectData = [
    {
        title: "Android App Demo",
        description: `Это Android-приложение, разработанное на Java с использованием архитектуры MVVM. Приложение имеет боковое меню для быстрой навигации, реализованное с помощью Navigation Drawer и Navigation Component.<br><br>
Главный экран использует View Binding для безопасного доступа к элементам интерфейса. Включены UserProfile, SensorManagerFragment, OrientationSensor и SlideshowFragment.`,
        type: "video",
        videoUrl: "videos/androidapp.mp4",
        link: "https://github.com/donteavesdrop/Mirea_Project"
    },
    {
        title: "ProceduralGen",
        description: `Базовая реализация процедурной генерации ландшафта с шумом Перлина на Python + Pygame. 2D-мир делится на чанки, которые динамически подгружаются при движении игрока.`,
        type: "image",
        img: "images/gen.png",
        link: "https://github.com/donteavesdrop/ProceduralGen2"
    },
    {
        title: "Hackaton front",
        description: `Frontend-приложение для управления задачами сотрудников: авторизация, распределение задач, отчеты и просмотр данных по сотрудникам и бизнес-точкам.`,
        type: "video",
        videoUrl: "videos/react.mp4",
        link: "https://github.com/donteavesdrop/hackaton-front"
    },
    {
        title: "Генеративно-состязательные сети",
        description: "Обучение GAN на PyTorch и TorchVision.",
        type: "ipynb",
        notebookUrl: "gan.html",
        link: "https://github.com/donteavesdrop/generative-models/tree/main"
    }
];

const projectsContainer = document.getElementById("projects-container");
const projectWrappers = Array.from(document.querySelectorAll(".project-wrapper"));
const projectButtons = Array.from(document.querySelectorAll(".project"));
const car = document.getElementById("car");

const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImg");
const modalVideo = document.getElementById("modalVideo");
const modalNotebook = document.getElementById("modalNotebook");
const modalDescription = document.getElementById("modalDescription");
const modalLink = document.getElementById("modalLink");
const closeModalBtn = document.querySelector(".close");

const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

let currentIndex = 0;
let rocketAngle = 0;
let rocketFacing = 1;
let boostTimer = null;
let rocketTime = 0;

function setActiveProject(index) {
    currentIndex = Math.max(0, Math.min(index, projectWrappers.length - 1));

    projectWrappers.forEach((wrapper, i) => {
        wrapper.classList.toggle("active", i === currentIndex);
    });

    const target = projectWrappers[currentIndex];
    if (target) {
        target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
}

function renderRocket() {
    const yFloat = Math.sin(rocketTime / 420) * 6;
    car.style.transform = `translateY(${yFloat}px) scaleX(${rocketFacing}) rotate(${rocketAngle}deg)`;
}

function startRocketLoop() {
    function tick(time) {
        rocketTime = time;
        renderRocket();
        window.requestAnimationFrame(tick);
    }
    window.requestAnimationFrame(tick);
}

function triggerBoost(direction) {
    rocketFacing = direction;
    rocketAngle = direction === 1 ? -14 : 14;
    car.classList.add("is-flying");

    if (boostTimer) {
        window.clearTimeout(boostTimer);
    }

    boostTimer = window.setTimeout(() => {
        rocketAngle = 0;
        car.classList.remove("is-flying");
    }, 280);
}

function goNext() {
    if (currentIndex < projectWrappers.length - 1) {
        setActiveProject(currentIndex + 1);
    }
    triggerBoost(1);
}

function goPrev() {
    if (currentIndex > 0) {
        setActiveProject(currentIndex - 1);
    }
    triggerBoost(-1);
}

function clearModalMedia() {
    modalImg.style.display = "none";
    modalVideo.style.display = "none";
    modalNotebook.style.display = "none";

    modalImg.src = "";
    modalVideo.pause();
    modalVideo.src = "";
    modalNotebook.src = "";
}

function openModal(index) {
    const data = projectData[index];
    if (!data) {
        return;
    }

    clearModalMedia();
    modalDescription.innerHTML = data.description;
    modalLink.href = data.link;

    if (data.type === "image") {
        modalImg.src = data.img;
        modalImg.style.display = "block";
    } else if (data.type === "video") {
        modalVideo.src = data.videoUrl;
        modalVideo.style.display = "block";
    } else if (data.type === "ipynb") {
        modalNotebook.src = data.notebookUrl;
        modalNotebook.style.display = "block";
    }

    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
    clearModalMedia();
}

document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    if (key === "d" || key === "в") {
        goNext();
    } else if (key === "a" || key === "ф") {
        goPrev();
    } else if (key === "escape" && modal.style.display === "flex") {
        closeModal();
    }
});

btnLeft.addEventListener("click", goPrev);
btnRight.addEventListener("click", goNext);

projectButtons.forEach((button, index) => {
    button.addEventListener("click", () => openModal(index));
});

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

setActiveProject(0);
startRocketLoop();
