const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const taskController = require('./api/task.js')
const homeController = require('./api/index.js')

//initialises the server
const app = express()

// To be able to read the body of PUT and POST requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/', homeController)
app.use('/api/task', taskController)

module.exports = app

// Listens on the deployment server port OR port 8000 if developing locally
if (process.env.NODE_ENV === 'development') {
	const port = process.env.PORT || 8000
	app.listen(port, () => {
		console.log(`✔️ Server is running on port ${port}`)
	})
}
