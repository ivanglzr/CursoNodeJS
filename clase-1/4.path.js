const path = require('node:path')

console.log(path.sep)

const filePath = path.join('folder', 'folder2', 'document.txt')
console.log(filePath)

const base = path.basename('/w/z/password.txt')
console.log(base)

const filename = path.basename('/w/z/password.txt', '.txt')
console.log(filename)

const ext = path.extname('1.2.3.4.5')
console.log(ext)
