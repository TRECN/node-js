const {readFileSync,writeFileSync} = require('fs')
//readFileSync takes two parameters 1: path, 2: type of file
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second)

//writeFileSync takes two parameters 1: path, 2: content to write
writeFileSync(
    './content/result.txt',
    `Here is the result: ${first}, ${second}`,
    {flag:'a'}
    )



