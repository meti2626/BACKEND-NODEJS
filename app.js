 const express = require ('express');
 const app = express();
 const morgan = require('morgan')
 const logger = require('./logger');
 const authorized = require('./authorize');

const { add } = require('lodash');

//post method
// static assets

 
const people = require('./2-express-tutorial/routes/people')

app.use(express.static ('./2-express-tutorial/methods-public'))
// PARSE FROM DATA
app.use(express.urlencoded({ extended:false}))   //what is this line doing

app.use(express.json())  //what is this line doing


app.use('/api/people', people)

app.post('/login' , (req,res)=>
{
   const {name}  = req.body;
   if(name){
      return res.status(200).send(`welcome ${name}`)
   }
    res.status(401).send('please Provide Credential')
})

//  app.get('/api/people', (req,res)=>
// {
//     res.status(200).json({success:true,data:people})
// })

// app.post('/api/people', (req,res)=>
// {
//     const {name} = req.body;
//     if(!name){
//         return res.status(400).json({success:false, msg:'please provide name value' })
//      }
//    res.status(201).send({success:true, person:name})
// })

// app.post('/api/people/postman', (req,res)=>{
//     const {name} = req.body;
//     if(!name){
//         return res
//         .status(400)
//         .json({success:false, msg:'please provide name value' })
//      }
//     res.status(201).send({success:true, data:[...people , name ]})
// })




// app.put('/api/people/:id' , (req,res)=>{
//        const {id} = req.params;
//         const {name} = req.body;
      
//         const person = people.find((person)=> person.id === Number(id))

//         if(!person){
//             return res
//             .status(404)
//             .json({success:false, msg:`no person with id ${id}`})
//         }

//     const newPeople = people.map((person)=>{
//         if(person.id === Number(id)){
//             person.name = name;
//         }
//         return person;  
//     })  
//       res.status(200).json({success:true, data:newPeople})
// })

// app.delete('/api/people/:id' ,(req,res)=>{
    
//    const person = people.find((person)=> person.id === Number(req.params.id))

//         if(!person){
//             return res
//             .status(404)
//             .json({success:false, msg:`no person with id ${req.params.id}`})
//         }

//         const newPeople = people.filter((person)=> person.id !== Number(req.params.id))
//         return res.status(200).json({success:true, data:newPeople})
// })
    


app.listen(5000, ()=>{
    console.log('server is listening on port 5000....');
}) 

