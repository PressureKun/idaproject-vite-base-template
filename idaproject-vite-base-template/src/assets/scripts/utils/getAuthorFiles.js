//
// Получает все файлы созданные разработчиком (удобно для ревью)
// и делает из них список со ссылками в формате md
//
// Запуск из корня проекта:
// node frontend/assets/js/utils/getAuthorFiles.js
// В корне появиться .md файл, его в git добавлять не нужно!
//

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const AUTHOR = 'Anton Nebykov';
const STARTS_WITH = 'frontend/'; // Нужно, чтобы понять что это путь к файлу, а не описание коммита
const OUTPUT_FILE = `${AUTHOR}_files.md`.replace(' ', '_');

// Команда для получения всех добавленных разработчиком файлов
const GIT_LOG = `git log --author="${AUTHOR}" --name-only --diff-filter=A --pretty="format:%s %cD" | uniq`;

// Запускаем команду
exec(GIT_LOG, (err, stdout) => {
    if (err) {
        console.log(`Error: ${err}`);
        return;
    }

    const lines = stdout.split('\n');
    let newContent = `# ${AUTHOR}\n`;

    lines.forEach(line => {
        console.log(line);

        // Если это путь к файлу, то делаем из него ссылку
        if (line.startsWith(STARTS_WITH)) {
            line = `[${path.basename(line)}](${line})\n`;
            // А если нет, то заголовок
        } else if (line.length > 0) {
            line = '### ' + line;
        }
        newContent += line + '\n';
    });

    fs.writeFile(OUTPUT_FILE, newContent, 'utf8', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('Completed');
    });
});
