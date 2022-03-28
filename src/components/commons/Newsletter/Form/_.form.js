import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Z from 'zod'
import { api } from '@/services/api'

export const INIT_STATE = { email: '' }
export const TEMP_STATE = { email: 'test@test.com' }
export const KEY_STATE = Object.keys(INIT_STATE).reduce(
	(acc, key) => ({ ...acc, [ key ]: key }), {}
)

const newsletterSchema = Z.object({
  [KEY_STATE.email]: Z.string()
		.nonempty({ message: 'Email is required' })
		.email({ message: 'Email is invalid' }),
})

const formOptions = {
	defaultValues: INIT_STATE,
	reValidateMode: 'onSubmit',
	resolver: zodResolver(newsletterSchema),
}

const INIT_ALERT = { status: '', message: '' }
const SUCCESS_MESSAGE = 'Thank you for subscribing'

/* ------------------ */

export const useNewsletter = () => {
	const [ alert, setAlert ] = useState(INIT_ALERT)
	const {
		handleSubmit, setError, reset, control,
		formState: { errors, isSubmitting, isSubmitSuccessful }
	} = useForm(formOptions)

	const resetForm = () => {
		setAlert(INIT_ALERT)
		reset(INIT_STATE)
	}

	const submitEmailSubscription = async (data) => {
		try {
			await api.checkEmail(data.email)
			await api.postNewsletter(data)
			// console.info('ui data ::', response)
			setTimeout(() => resetForm(), 3000)
		} catch (error) {
			// console.warn('ui error ::', error.message)
			setError('api', { message: error.message })
			setAlert({
				status: 'error',
				message: error.message
			})
		}
	}

	useEffect(() => {
		if (errors[KEY_STATE.email]) setAlert({
			status: 'warning',
			message: errors[KEY_STATE.email]?.message
		})
	}, [ errors ])

	useEffect(() => {
		if (isSubmitSuccessful) setAlert({
			status: 'success',
			message: SUCCESS_MESSAGE
		})
	}, [ isSubmitSuccessful ])

	return {
		alert,
		control,
		name: KEY_STATE,
		errors,
		isSubmitting,
		onSubmit: handleSubmit(submitEmailSubscription),
	}
}
