import {RequestHandler} from 'express'

import {createNewUser} from './user.service'
export const postUser: RequestHandler = async (req, res) => {
	try {
		console.log(req.body)
		const {fname, lname, password, avatar, email} = req.body
		const user = await createNewUser(fname, lname, password, avatar, email)
		res.status(201).json(user)
	} catch (error) {
		res.status(400).json({error: 'error at controller'})
	}
}
