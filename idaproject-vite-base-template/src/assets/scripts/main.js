function initLayout() {
    const initTest = () => {
        console.log('К странице подключены скрипты из main.js через шаблон layouts/main.njk');
    };

    document.addEventListener('DOMContentLoaded', () => {
        initTest();
    });
}

initLayout();
