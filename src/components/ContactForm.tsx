import { FormControl, FormLabel, Input, Box } from '@chakra-ui/react'
import { FunctionComponent, ReactElement } from 'react'

export const ContactForm: FunctionComponent = (): ReactElement => {
	return (
		<Box px={1}>
			<FormControl isRequired>
				<FormLabel>First name</FormLabel>
				<Input type="text" />
			</FormControl>
		</Box>
	)
}
