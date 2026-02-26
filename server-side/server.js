import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()

app.get("/", (request, response) => {
  response.send(`Hello!`)
})

app.get('/waves', (request, response) => {
  response.send('waves')
})

app.post('/waves', req, res) => {
  
    console.log(req,body)
    res.status(200).json({message: `You send me this: ${JSON.stringify req.body)}`})
})

app.listen(8000, () => {
  console.log(`Started listening for requests made to http://localhost:8000`)
})

const sum = (a, b) => {
  console.log(b);
}

sum("extra argument", 10)
