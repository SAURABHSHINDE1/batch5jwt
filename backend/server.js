import express from 'express'
import dotenv from 'dotenv'
import router from './src/routes/userRoutes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app  = express()
const port = process.env.PORT || 5000
dotenv.config()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin :"http://127.0.0.1:5500",
    credentials : true
}))

app.use('/api' , router)

app.listen(port , ()=>{
    console.log("server is running on " + port)
})