import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.js'
import connectToDatabase from './db/db.js'

connectToDatabase()
const app = express()
app.use(cors({
    origin: "https://employee-frontend-psi.vercel.app",
    credentials: true,
}))
app.use(express.json())
app.use('/api/auth', authRouter)
app.get("/healthcheck", (req, res) => {
    res.json({status:200, data:"Server is running"})
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

