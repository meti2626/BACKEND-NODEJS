import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router = express.Router()

// Register a new user end point
router.post('/register' , (req, res) =>{
    const {username , password}  = req.body;
  
  
//encrypt the password before storing it in the database
    const hashedPassword= bcrypt.hashSync(password , 8)
    try{
            const insertUser =db.prepare(`INSERT INTO users(username, password) VALUES (?, ?)`)
            const result = insertUser.run(username , hashedPassword)

            //now that we have a user , I want to add their first to do 

            const  defaultTodo = 'Hello :) Add your first to do!'
            const insertTodo = db.prepare(`INSERT INTO todos (user_id, task) VALUES (?, ?)`)
            
            insertTodo.run(result.lastInsertRowid , defaultTodo)

            // create a token for the user 
            const token = jwt.sign({id: result.lastInsertRowid} , process.env.JWT_SECRET , {expiresIn: '24h'})
            res.json({token})
    } 
    catch(err){
        console.log(err.message)
        return res.status(503).send('Internal server error')
    }

    res.sendStatus(201)

  
})

router.post('/login' , (req, res) =>{

// we look up the passwotd associated with that email  and compare it with that encoded password

    const {username , password} = req.body;

    try{
       const getUser =db.prepare(`SELECT * FROM users WHERE username = ?`)
       const user = getUser.get(username)
        
       if(!user){
         return res.status(404).send('User not found')
       }
const passwordIsValid = bcrypt.compareSync(password , user.password)
        if(!passwordIsValid){
            return res.status(401).send({message: 'Invalid password'})
        }
        console.log(user)

        // create a token for the user
        const token = jwt.sign({id: user.id} , process.env.JWT_SECRET , {expiresIn: '24h'})
        res.json({token} )

     }
    catch(err){
        console.log(err.message)
        return res.status(503).send('Internal server error')
    }

})

export default router