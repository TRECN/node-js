//Modules
//CommonJs, every file is module bu default
// Modules -  Encapsulated Code (only share minimum),only shareing what we want
const name=require('./names');
const sayHi=require('./utils')
const data = require('./alternative')
require('./mindgrenage')

//  sayHi(`susan`)
//  sayHi(name.john)
//  sayHi(name.peter)