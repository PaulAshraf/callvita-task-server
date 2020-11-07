const express = require('express')
const { Router } = express
const { v4 } = require('uuid')
const { newSchema, updateSchema } = require('../validation/task.js')
const { get, add, edit, remove } = require('../models/Task.js')

const router = Router()

//read route
//returns all tasks in the db
router.get('/', (_, res) => {
	try {
		const tasks = get()
		res.status(200).json(tasks)
	} catch (error) {
		console.log(error)
		res.status(400).json(error)
	}
})

//create route
//validates the request body before modifying the db
//creates a unique id with uuid
router.post('/', async (req, res) => {
	const task = req.body
	try {
		const valTask = await newSchema.validateAsync(task)
		const id = v4()
		valTask.id = id
		add(valTask)
		res.status(200).json(valTask)
	} catch (error) {
		console.log(error)
		res.status(400).json(error)
	}
})

//update route
//validates the request body before modifying the db
router.put('/:id', async (req, res) => {
	const id = req.params.id
	const task = req.body
	try {
		const valTask = await updateSchema.validateAsync(task)
		edit(id, valTask)
		res.status(200).json(valTask)
	} catch (error) {
		console.log(error)
		res.status(400).json(error)
	}
})

//delete route
router.delete('/:id', async (req, res) => {
	const id = req.params.id
	try {
		remove(id)
		res.status(200).json({ message: 'Action Performed Succesfully' })
	} catch (error) {
		console.log(error)
		res.status(400).json(error)
	}
})

module.exports = router
