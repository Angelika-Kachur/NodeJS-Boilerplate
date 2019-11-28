import Router from 'express'
import {
	postUser,
	getAllUsers,
	getUser,
	putUser,
	deleteUser,
} from './user.controller'
const router = Router()

router.route('/').get(getAllUsers)

router.route('/').post(postUser)

router.route('/:email').get(getUser)

router.route('/').put(putUser)

router.route('/:email').delete(deleteUser)

export default router
