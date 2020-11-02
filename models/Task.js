let data = [
	{
		id: '133aa138-65eb-4dce-b8f7-2d6dbff647a4',
		title: 'Learn React',
		description: 'Learn how to use react in building web app',
	},
	{
		id: 'fc0590d2-5287-4366-a811-2e5d2324bdeb',
		title: 'Learn Node',
		description: 'Learn how to use node in building server',
	},
	{
		id: '56cb0bef-1b3a-4138-bf7f-456fc5f1eca6',
		title: 'Learn Array Manipulation',
		description: 'Learn how to manipulate arrays in javascript',
	},
]

const updateTask = (oldTask, newTask) => {
	let task = { ...oldTask }
	Object.keys(task).forEach((key) => {
		if (newTask[key]) {
			task[key] = newTask[key]
		}
	})
	return task
}

const get = () => {
	return data
}

const add = (task) => {
	data.push(task)
}

const edit = (id, newTask) => {
	const found = data.find((task, index) => {
		if (task.id === id) {
			data[index] = updateTask(data[index], newTask)
			return true
		}
	})
	if (!found) throw { error: 'Invalid ID' }
}

const remove = (id) => {
	const found = data.find((task, index) => {
		if (task.id === id) {
			data.splice(index, 1)
			return true
		}
	})
	if (!found) throw { error: 'Invalid ID' }
}

export { get, add, edit, remove }
