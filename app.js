import express from 'express'
import bodyParser from 'body-parser'
import fs from 'fs'
import marked from 'marked'
import path from 'path'

import taskController from './api/task.js'

//init. the server
const app = express()

// To be able to read the body of PUT and POST requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Displays the README file on the home route (/)
app.get('/', (_, res) => {
	let readmePath = path.resolve('./README.md')
	fs.readFile(readmePath, 'utf8', (error, data) => {
		if (error) {
			res.status(404).send('Internal Server Error')
			console.error(error)
		}
		res.status(200).send(marked(data.toString()))
	})
})

app.use('/api/task', taskController)

// Listens on the deployment server port OR port 3000 if developing locally
const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log('✔️ Server is running')
})
