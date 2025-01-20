const path = require('path');
const fs = require('fs').promises;

async function listFilesInDirectory() {
  try {
    const folderPath = path.join(__dirname, 'secret-folder');

    const items = await fs.readdir(folderPath, { withFileTypes: true });

    for (const item of items) {
      if (item.isFile()) {
        const filePath = path.join(folderPath, item.name);

        const stats = await fs.stat(filePath);

        const fileName = path.basename(filePath, path.extname(filePath));

        const fileExt = path.extname(filePath).slice(1);

        const fileSize = stats.size;

        console.log(`${fileName} - ${fileExt} - ${fileSize} bytes`);
      }
    }
  } catch (err) {
    console.error('Ошибка:', err.message);
  }
}

listFilesInDirectory();
