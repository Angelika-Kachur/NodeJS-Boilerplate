import UserModel from './user.model'

export const createNewUser = (
	fname: string,
	lname: string,
	password: string,
	email: string,
	avatar?: string,
) => {
	let newUser = {
		fname,
		lname,
		password,
		avatar,
		email,
	}
	return UserModel.create(newUser)
		.then(savedUser => {
			return savedUser
		})
		.catch(error => {
			return error
		})
}
