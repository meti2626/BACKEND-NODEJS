//http://localhost:8383

const express = require('express')
const app= express()
const PORT = 8383


let data ={
    name: 'james'
 }


//HTTP VERBS and Routes


//Website endpoints -[for sending back  html and they typically come when a user enters  a url in a browser ]
app.get('/', (req,res)=>{
     res.send('<h1>HomePage</h1>')
})

app.get('/dashboard' , (req,res)=>{
    
    res.send('<h1>DashBoard</h1>')
})

//Type 2- API endpoints -[ when u enter username and password]

app.get('/api/users' , (req,res) =>{
    console.log('This one is for data')
    res.send(data)
})


app.listen(PORT , ()=>console.log(`Server has started on: ${PORT}`))


