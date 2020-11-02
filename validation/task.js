import { object, string, number } from 'joi'

const schema = object({
	id: number().required(),
	title: string().required(),
	description: string().required(),
})

export default schema
