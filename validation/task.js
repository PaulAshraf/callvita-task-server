import joi from 'joi'

const newSchema = joi.object({
	title: joi.string().required(),
	description: joi.string().required(),
})

const updateSchema = joi.object({
	id: joi.string(),
	title: joi.string(),
	description: joi.string(),
})

export { newSchema, updateSchema }
