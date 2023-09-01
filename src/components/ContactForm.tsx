import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	Textarea,
	Button,
	useColorModeValue,
	Box,
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { FunctionComponent, ReactElement } from 'react'
import { Formik, Form, Field } from 'formik'

export const ContactForm: FunctionComponent = (): ReactElement => {
	const backgroundColor = useColorModeValue('gray.100', 'gray.700')
	function validateName(value) {
		let error
		if (!value) {
			error = 'Name is required'
		}
		return error
	}

	return (
		// Background color to be the inverted color of light/dark mode
		<Box
			backgroundColor={backgroundColor}
			minW={{ base: '90vw', md: '50vw', lg: '30vw' }}
			mx={'auto'}
			p={5}
			rounded={'lg'}
			boxShadow={'md'}
		>
			<Formik
				initialValues={{ firstName: '', lastName: '', email: '' }}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500))
					alert(JSON.stringify(values, null, 2))
				}}
			>
				<Form>
					<Field name="firstName" validate={validateName}>
						{({ field, form }) => (
							<FormControl
								isInvalid={
									form.errors.firstName &&
									form.touched.firstName
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
					<Field name="lastName" validate={validateName}>
						{({ field, form }) => (
							<FormControl
								isInvalid={
									form.errors.lastName &&
									form.touched.lastName
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
					<Field name="email" validate={validateName}>
						{({ field, form }) => (
							<FormControl
								isInvalid={
									form.errors.email && form.touched.email
								}
							>
								<FormLabel>Email</FormLabel>
								<Input {...field} placeholder="Email" />
								<FormErrorMessage>
									{form.errors.email}
								</FormErrorMessage>
							</FormControl>
						)}
					</Field>
					<Field name="message" validate={validateName}>
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
		</Box>
	)
}
