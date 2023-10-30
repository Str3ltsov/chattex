import 'dotenv/config'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import userRoutes from './api/v1/routes/authRoutes.js'
import ErrorHandler from './api/v1/middlewares/errorHandler.js'

/* Dotenv enviroment. */
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

/* Connection to mongodb. */
mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => {
        console.log('Connection to MongoDB has been established.')
    })
    .catch(error => {
        console.error(`Mongoose error caught: ${error.stack}`);
        process.exit(1);
    })

/* Express server. */
const app = express()

// Configs
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Routes
app.use('/api/v1/auth', userRoutes)

// Middlewares
app.use(ErrorHandler)

// Listener
app.listen(process.env.APP_PORT, () =>
    console.log(`Server is running on ${process.env.APP_URL}:${process.env.APP_PORT}`)
)