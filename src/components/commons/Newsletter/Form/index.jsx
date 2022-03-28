import { useController } from 'react-hook-form'
import { FallingLines } from 'react-loader-spinner'
// import { DevTool } from '@hookform/devtools'
// import { DevModeForm } from '@/utils'
import { HOME } from '@/constants/content'
import { Form } from './_.styles'
import  { Alert } from '../Alert'
import { useNewsletter } from './_.form'

const FieldInput = ({ type = 'text', name, control, ...rest }) => {
	const { field } = useController({	name, control })
	return <Form.Input { ...field } { ...rest } type={ type } />
}

const FieldSubmit = ({ children, text, disabled, isSubmitting, ...rest }) => {
	return (
		<Form.Submit disabled={ disabled } { ...rest }>
			{
				(isSubmitting)
				? <FallingLines width="30" color="#C8553D" />
				: (children || text)
			}
		</Form.Submit>
	)
}

const NewsletterForm = () => {
	const {
		alert,
		control,
		name,
		errors,
		isSubmitting,
		onSubmit,
	} = useNewsletter()

	return (
		<>
		{/* <DevModeForm _active setState={ reset } initState={ INIT_STATE } tempState={ TEMP_STATE } /> */}

		<Form onSubmit={ onSubmit }>
			<Alert
				status={ alert.status }
				message={ alert.message }
			/>

			<FieldInput
				control={ control }
				name={ name.email }
				placeholder={ HOME.newsletter.placeholder }
				isInvalid={ !!errors[name.email] }
				status={ alert.status }
			/>

			<FieldSubmit
				disabled={ isSubmitting }
				isSubmitting={ isSubmitting }
				text={ HOME.newsletter.cta_btn }
			/>
		</Form>

		{/* <DevTool control={ control } /> */}
		</>
	)
}

export { NewsletterForm }
