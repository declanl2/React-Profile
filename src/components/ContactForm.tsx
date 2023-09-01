import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	Button,
	useColorMode,
} from '@chakra-ui/react'
import { FunctionComponent, ReactElement } from 'react'
import { Formik, Form, Field } from 'formik'

export const ContactForm: FunctionComponent = (): ReactElement => {
	const { colorMode } = useColorMode()

	function validateName(value) {
		let error
		if (!value) {
			error = 'Name is required'
		}
		return error
	}

	return (
		<Formik
			initialValues={{ firstName: '', lastName: '', email: '' }}
			onSubmit={async (values) => {
				await new Promise((r) => setTimeout(r, 500))
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<Form>
				<Field name="name" validate={validateName}>
					{({ field, form }) => (
						<FormControl
							isInvalid={form.errors.name && form.touched.name}
						>
							<FormLabel>First name</FormLabel>
							<Input {...field} placeholder="name" />
							<FormErrorMessage>
								{form.errors.name}
							</FormErrorMessage>
						</FormControl>
					)}
				</Field>
				<Button
					type="submit"
					colorScheme="purple"
					color={colorMode === 'light' ? 'white' : 'black'}
				>
					Submit
				</Button>
			</Form>
		</Formik>
	)
}
