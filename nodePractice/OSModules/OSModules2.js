const path = require('path')

console.log(path.sep)
const fileP=path.join('/content','subfolder','test.txt')
console.log(fileP)

const base=path.basename(fileP)
console.log(base)

const absolute=path.resolve(__dirname,'contant','subfolder','test.txt')
console.log(absolute)