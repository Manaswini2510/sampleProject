const express = require('express')
const sqlite3 = require('sqlite3')
const {open} = require('sqlite')
const cors = require('cors')
const path = require('path')
const app = express()
const filePath = path.join(__dirname,'database.db')
app.use(cors())
app.use(express.json())

let db;
const intiliazeDb = async()=>{
    try{
        db = await open({
            filename: filePath,
            driver: sqlite3.Database
        })
        app.listen(3001,()=>{
            console.log("helllos")
        })
    }catch(e){

    }
}

intiliazeDb()

app.get('/users',async(request,response)=>{
    const query = `INSERT INTO users (id, name) VALUES(1, 'manoj')`
    await db.run(query)
    const a = `SELECT * FROM users`
    const arr=await db.all(a)
    response.json(arr)
})

app.post('/login', async(request,response)=>{
    console.log(request.body)
})