const fs = require("node:fs/promises");
const path = require("node:path");

const folder = process.argv[2] ?? ".";

async function ls(directory) {
  let files;

  try {
    files = await fs.readdir(directory);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(directory, file);

    let stats;
    try {
      stats = await fs.stat(filePath);
    } catch (error) {
      console.error(`No se puede leer ${filePath}`);
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "d" : "-";
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleString();

    return `${fileType} ${file} ${fileSize.toString()} ${fileModified}`;
  });

  const filesInfo = await Promise.all(filesPromises);

  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

ls(folder);
