const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')

dotenv.config()
connectDB()

const app = express()
app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(cors())
app.use(express.urlencoded({ extended: true })) 
app.use(express.json())

app.use('/', userRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`🟢 Servidor en puerto ${PORT}`))
