const express = require('express')
const app = express()
const jwt=require('jsonwebtoken')

app.use(express.json())

const posts = [
    {
        username:'rishabh',
        title: 'post 1'
    },
    {
        username:'raj',
        title: 'post 2'
    }
]
app.get('/posts',(req,res)=>{
    res.json(posts)
})
app.get('/login',(req,res)=>{

})


app.listen(3000)