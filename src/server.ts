import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './resources/User/user.router'
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (req, res) => {
	return res.status(200).json({message: 'success'})
})

app.use('/users', userRouter)

export default app
