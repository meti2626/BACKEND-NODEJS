//http://localhost:8383

const express = require('express')
const app= express()
const PORT = 8383


let data =['james']
 
//Middleware
app.use(express.json())




//HTTP VERBS and Routes


//Website endpoints -[for sending back  html and they typically come when a user enters  a url in a browser ]
app.get('/', (req,res)=>{
    console.log('This is home page')
     res.send(`
        <body style="background:pink ; color:blue;">
            <h1>DATA:</h1>
             <p>${JSON.stringify(data)}</p>
            <a href="/dashboard"> Dashboard</a>  
        </body>
    <script>console.log('This is home page')</script>
        `)
})

app.get('/dashboard' , (req,res)=>{
    
    res.send(`
         <body>
         <h1>dashboard</h1>
         <a href="/">home</a>
         </body>
        `)
})

//Type 2- API endpoints -[ when u enter username and password]
// they typically send back data in json format

//CRUD - CREATE-post , READ-get , UPDATE-put , DELETE-delete


app.get('/api/data' , (req,res) =>{
    console.log('This one is for data')
    res.send(data)
})

app.post('/api/data' ,(req , res) =>{
    // someone wants to create a user (when they click a sign up )
// the user cicks the sign up button after entering credentials , and thie browser is wires up tosend out a network request to the server to handle that action 

     const newEntry = req.body
     console.log(newEntry)
     data.push(newEntry.name)
     res.sendStatus(201)
       })

app.delete('/api/data' , (req,res)=>{
    data.pop()
    console.log('deleted ')
    res.sendStatus(203)
})


app.listen(PORT , ()=>console.log(`Server has started on: ${PORT}`))


