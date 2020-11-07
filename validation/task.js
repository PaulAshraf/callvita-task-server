const joi = require('joi')

//makes the title and description fields required
const newSchema = joi.object({
	title: joi.string().required(),
	description: joi.string().required(),
})

//expects all 3 fields but they are not required, as the user may only update 1 field
const updateSchema = joi.object({
	id: joi.string(),
	title: joi.string(),
	description: joi.string(),
})

module.exports = { newSchema, updateSchema }
