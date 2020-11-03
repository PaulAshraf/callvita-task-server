import express from 'express'
import bodyParser from 'body-parser'

import taskController from './api/task.js'
import homeController from './api/index.js'

//initialises the server
const app = express()

// To be able to read the body of PUT and POST requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', homeController)
app.use('/api/task', taskController)

// Listens on the deployment server port OR port 8000 if developing locally
const port = process.env.PORT || 8000
app.listen(port, () => {
	console.log(`✔️ Server is running on port ${port}`)
})
