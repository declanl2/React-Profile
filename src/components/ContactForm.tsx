import { FormControl, FormLabel, Input, Box } from '@chakra-ui/react'
import { FunctionComponent, ReactElement } from 'react'
import { Field, Form, Formik } from 'formik'

export const ContactForm: FunctionComponent = (): ReactElement => {
	return (
		<Form>
			<FormControl isRequired>
				<FormLabel>First name</FormLabel>
				<Input type="text" />
			</FormControl>
		</Form>
	)
}
