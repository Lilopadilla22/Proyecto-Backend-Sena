const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')

dotenv.config()
connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/users', userRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`🟢 Servidor en puerto ${PORT}`))
