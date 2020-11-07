const express = require('express')
const { Router } = express
const fs = require('fs')
const marked = require('marked')
// const path = require('path')

const router = Router()

// Displays the README file on the home route (/)
router.get('/', (_, res) => {
	let readmePath = __dirname + '/../README.md'
	fs.readFile(readmePath, 'utf8', (error, data) => {
		if (error) {
			res.status(404).send('Internal Server Error')
			console.error(error)
		}
		res.status(200).send(marked(data.toString()))
	})
})

module.exports = router
