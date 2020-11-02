let data = [
	{
		id: 1,
		title: 'Learn React',
		description: 'Learn how to use react in building web app',
	},
	{
		id: 2,
		title: 'Learn Node',
		description: 'Learn how to use node in building server',
	},
	{
		id: 3,
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

const add = (task) => {
	data.push(task)
}

const edit = (id, newTask) => {
	data.find((task, index) => {
		if (task.id === id) {
			data[index] = updateTask(data[index], newTask)
			return true
		}
	})
}

const remove = (id) => {
	data.find((task, index) => {
		if (task.id === id) {
			array.splice(index, 1)
			return true
		}
	})
}
