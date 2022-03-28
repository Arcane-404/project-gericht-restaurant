import ky from 'ky'

// use url from proxy
const BASE = { url: 'http://localhost:8000', api: '/api/newsletter', }
const request = ky.create({ prefixUrl: BASE.url + BASE.api })

/* --- GET : check if email exists --- */
export const checkEmail = async (email = '') => {
	try {
		const response = await request.get(`?email=${ email }`).json()
		console.info('api data ::', response)
		if (response.length) throw new Error('Email is already subscribed')
	} catch (error) {
		error.status = 400
		console.warn('api error ::', error.message)
		throw error
	}
}

/* --- POST : add new email to newsletter --- */
export const postNewsletter = async (json = {}) => {
	try {
		const response = await request.post('', { json }).json()
		console.info('api data ::', response)
		return { success: true, response }
	} catch (error) {
		error.status = 400
		console.warn('api error ::', error.message)
		throw error
	}
}
