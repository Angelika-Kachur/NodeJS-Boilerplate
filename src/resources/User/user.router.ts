import Router from 'express'
import {postUser} from './user.controller'
const router = Router()

router.route('/').get((req, res) => {
	return res.status(200).json({message: 'you just hit users/'})
})

router.route('/').post(postUser)

export default router
