import app from './server'
import config from './config'
import connectDb from './services/db'

connectDb()
	.then(() => {
		console.log('DB is connected')
	})
	.catch(() => {
		console.log('DB is not connected')
	})
const server = app.listen(config.authPort, () => {
	console.log('runnning at port: ', config.authPort)
})

process.on('unhandledRejection', e => {
	server.close(() => {
		process.exit(1)
	})
})
