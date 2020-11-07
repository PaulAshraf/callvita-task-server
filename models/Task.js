// our fake database
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

// a helper method to be used inside the edit function.
//loops thought all the keys of the old task, then checks:
//if the key is present, it will update the oject
const updateTask = (oldTask, newTask) => {
	let task = { ...oldTask } //es6 syntax for deep copy
	Object.keys(task).forEach((key) => {
		if (newTask[key]) {
			task[key] = newTask[key]
		}
	})
	return task
}

//returns the data array
const get = () => {
	return data
}

//adds to the data array
const add = (task) => {
	data.push(task)
}

//searchs for an element with id equal to the input id
//then uses the updateTask method to update the entry
const edit = (id, newTask) => {
	const found = data.find((task, index) => {
		if (task.id === id) {
			data[index] = updateTask(data[index], newTask)
			return true
		}
	})
	if (!found) throw { error: 'Invalid ID' } //.find() return false if it does not find an id
}

//deletes the element with the input id
const remove = (id) => {
	const found = data.find((task, index) => {
		if (task.id === id) {
			data.splice(index, 1)
			return true
		}
	})
	if (!found) throw { error: 'Invalid ID' } //.find() return false if it does not find an id
}

module.exports = { get, add, edit, remove }
