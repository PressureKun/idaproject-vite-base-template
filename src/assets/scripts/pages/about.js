function initAboutPage() {
    const initTest = () => {
        console.log('К странице подключены скрипты из about.js через шаблон pages/about.njk');
    };

    document.addEventListener('DOMContentLoaded', () => {
        initTest();
    });
}

initAboutPage();
