function initMainPage() {
    const initTest = () => {
        console.log('К странице подключены скрипты из index.js через шаблон pages/index.njk');
    };

    document.addEventListener('DOMContentLoaded', () => {
        initTest();
    });
}

initMainPage();
