import 'dotenv/config'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'

// Dotenv enviroment.
dotenv.config({ path: `.env.${process.env.APP_ENVIROMENT}` });

// Connection to mongodb.
mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => {
        console.log('Connection to MongoDB has been established.')
        startServer()
    })
    .catch(error => {
        console.error(`Mongoose error caught: ${error.stack}`);
        process.exit(1);
    })

// Express server.
const startServer = () => {
    const app = express()

    app.use(express.json())
    app.use(cors())

    app.listen(process.env.APP_PORT, () =>
        console.log(`Server is running on ${process.env.APP_URL}:${process.env.APP_PORT}`)
    )
}