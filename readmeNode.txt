Node js

How node evaluate javascript code.
=> REPL-Read eval print loop(for playing around)
=>CLI(Command line interface) exicutable(importent)

REPL: 
    type 'node' on cmd(you are in repl) 
    its like typing java script in a browser console 
    we can use basic javascript command in it 
    to exit press ctlr+c two times

Start :

create a folder and create a 
javascript file to run the javascrpt 
file we need to write node <name>.js 

GLOBALS - No Window!! 
__dirname = path to current directory 
__filename =  file name 
require = function to use modules (CommonJs)
module = info about current module(file)
process = info about env where the program is being executed

Modules 
- all your code will be run in one file but it will be divided into modules
- encapsulated code 
- every file in node is a module
- what ever we export in the exports object we
    can access all over the project

Built-in Modules 
- OS 
- path
- FS 
- HTTP 

OS Modules 
- const os=require('os) to initialize os module to a variable called os

path Module 
- const path =  require('path') to initialize path module to a variable called path

FS Module 
Sync methods
- const {readFileSync} = require('fs') to destructure the module FS
- readFileSync() is used to read the content of the file 
- writeFileSync() is used to write contents in a file or create a file
Async methods 
- const {readFile,writeFile} = require('fs')
- readFile() is used to read the content of the file 
- writeFile() is used to write contents in a file or create a file
- we can use multiple callbacks 
- here on task doesnot prevents other task from happening 
- here node carry on with the next user without worrying  about the previous user

HTTP Module 
- const http  = require('http') to initiallize http module to http variable
- it is a module to setup a server 
- To set up a server we use createServer() function in http module 
- req is request res is response (these both are objects)
- to setup port we use server.listen() function