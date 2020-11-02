import joi from 'joi'

const newSchema = joi.object({
	id: joi.number().required(),
	title: joi.string().required(),
	description: joi.string().required(),
})

export default schema
