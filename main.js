function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
}

function loadStyle(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
}

// Проверяем устройство и загружаем соответствующие файлы
if (isMobileDevice()) {
    loadScript('mobile.js');  // Подключаем скрипт для мобильных устройств
    loadStyle('mobile.css');  // Подключаем стили для мобильных устройств
} else {
    loadScript('script.js'); // Подключаем скрипт для настольных устройств
    loadStyle('styles.css'); // Подключаем стили для настольных устройств
}
