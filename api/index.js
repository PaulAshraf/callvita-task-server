import express from 'express'
const { Router } = express
import fs from 'fs'
import marked from 'marked'
import path from 'path'

const router = Router()

// Displays the README file on the home route (/)
router.get('/', (_, res) => {
	let readmePath = path.resolve('./README.md')
	fs.readFile(readmePath, 'utf8', (error, data) => {
		if (error) {
			res.status(404).send('Internal Server Error')
			console.error(error)
		}
		res.status(200).send(marked(data.toString()))
	})
})

export default router
