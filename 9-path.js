// path 

const path = require ('path')

console.log(path.sep)
const filepath = path.join('/content','subfolder','test.txt')
// console.log(filepath)


const base = path.basename(filepath);
// console.log(base)

//do more research
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)