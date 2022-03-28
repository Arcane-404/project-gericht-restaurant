import { useController } from 'react-hook-form'

// const FieldInputList = ({ type = 'text', name, control, ...rest }) => {
// 	const { field } = useController({	name, control })
// 	return <Form.Input { ...field } { ...rest } type={ type } />
// 	// add <datalist />
// }


const ReservationForm = () => {
	return (
		<div>ReservationForm</div>
		/*
		<Form onSubmit={ onSubmit }>
			<Alert
				status={ alert.status }
				message={ alert.message }
			/>

			<FieldInputList
				control={ control }
				name={ name.email }
				isInvalid={ !!errors[name.email] }
				status={ alert.status }
			/>

			<FieldCalendar
				control={ control }
				name={ name.email }
				isInvalid={ !!errors[name.email] }
				status={ alert.status }
			/>

			<FieldInputList
				control={ control }
				name={ name.email }
				isInvalid={ !!errors[name.email] }
				status={ alert.status }
			/>

			<FieldSubmit
				disabled={ isSubmitting }
				isSubmitting={ isSubmitting }
				text={ HOME.newsletter.cta_btn }
			/>
		</Form>
		*/
	)
}

export { ReservationForm }
