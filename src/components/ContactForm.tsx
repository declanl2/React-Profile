import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	Textarea,
	Button,
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { FunctionComponent, ReactElement } from 'react'
import { Formik, Form, Field } from 'formik'

export const ContactForm: FunctionComponent = (): ReactElement => {
	const generateMailtoLink = (values) => {
		const { message } = values

		// Encode values to ensure proper formatting in the mailto link

		const encodedMessage = encodeURIComponent(message)

		// Generate the mailto link with subject and body
		const mailtoLink = `mailto:hi@declanlawson.dev?subject=Contact Form Submission&body=${encodedMessage}`

		return mailtoLink
	}

	// Validation function for each field
	const validateFirstName = (value) => {
		let error
		if (!value) {
			error = 'First Name is required'
		}
		return error
	}

	const validateLastName = (value) => {
		let error
		if (!value) {
			error = 'Last Name is required'
		}
		return error
	}

	const validateEmail = (value) => {
		let error
		if (!value) {
			error = 'Email is required'
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
			error = 'Invalid email address'
		}
		return error
	}

	const validateMessage = (value) => {
		let error
		if (!value) {
			error = 'Message is required'
		}
		return error
	}

	return (
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				message: '',
			}}
			onSubmit={async (values) => {
				const mailtoLink = generateMailtoLink(values)
				window.location.href = mailtoLink
			}}
		>
			<Form>
				<Field name="firstName" validate={validateFirstName}>
					{({ field, form }) => (
						<FormControl
							isInvalid={
								form.errors.firstName && form.touched.firstName
							}
						>
							<FormLabel>First Name</FormLabel>
							<Input {...field} placeholder="First Name" />
							<FormErrorMessage>
								{form.errors.firstName}
							</FormErrorMessage>
						</FormControl>
					)}
				</Field>
				<Field name="lastName" validate={validateLastName}>
					{({ field, form }) => (
						<FormControl
							isInvalid={
								form.errors.lastName && form.touched.lastName
							}
						>
							<FormLabel>Last Name</FormLabel>
							<Input {...field} placeholder="Last Name" />
							<FormErrorMessage>
								{form.errors.lastName}
							</FormErrorMessage>
						</FormControl>
					)}
				</Field>
				<Field name="email" validate={validateEmail}>
					{({ field, form }) => (
						<FormControl
							isInvalid={form.errors.email && form.touched.email}
						>
							<FormLabel>Email</FormLabel>
							<Input {...field} placeholder="Email" />
							<FormErrorMessage>
								{form.errors.email}
							</FormErrorMessage>
						</FormControl>
					)}
				</Field>
				<Field name="message" validate={validateMessage}>
					{({ field, form }) => (
						<FormControl
							isInvalid={
								form.errors.message && form.touched.message
							}
						>
							<FormLabel>Message</FormLabel>
							<Textarea
								{...field}
								placeholder="Message"
								size="md"
								resize="vertical"
								minH="100px"
							/>
							<FormErrorMessage>
								{form.errors.message}
							</FormErrorMessage>
						</FormControl>
					)}
				</Field>
				<Button
					type="submit"
					colorScheme="purple"
					leftIcon={<EmailIcon />}
					mt={4}
				>
					Send
				</Button>
			</Form>
		</Formik>
	)
}
