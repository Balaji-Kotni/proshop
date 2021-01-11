import express from 'express'
import connectDB from './config/db.js'
import productRouter from './routes/productRoutes.js'
import { notfound, errorHandler } from './middelware/errorMiddelware.js'

import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
connectDB()
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('API server is running')
})

app.use('/api/products', productRouter)
app.use(notfound)
app.use(errorHandler)
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
