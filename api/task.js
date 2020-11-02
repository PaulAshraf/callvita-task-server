import express from 'express'
const { Router } = express
import schema from '../validation/task.js'
import { get, add, edit, remove } from '../models/Task.js'

const router = Router()

router.get('/', (_, res) => {
	try {
		const tasks = get()
		res.status(200).json(tasks)
	} catch (error) {
		console.log(error)
		res.status(400).json(error)
	}
})

router.post('/', async (req, res) => {
	const task = req.body
	try {
		const valTask = await schema.validateAsync(task)
		add(valTask)
		res.status(200).json(valTask)
	} catch (error) {
		console.log(error)
		res.status(400).json(error)
	}
})

router.put('/:id', async (req, res) => {
	const task = req.body
	try {
		const id = parseInt(req.params.id)
		const valTask = await schema.validateAsync(task)
		edit(id, valTask)
		res.status(200).json(valTask)
	} catch (error) {
		console.log(error)
		res.status(400).json(error)
	}
})

router.delete('/:id', async (req, res) => {
	try {
		const id = parseInt(req.params.id)
		remove(id)
		res.status(200).json({ message: 'Action Performed Succesfully' })
	} catch (error) {
		console.log(error)
		res.status(400).json(error)
	}
})

export default router
