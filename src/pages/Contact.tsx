import { FunctionComponent, ReactElement } from 'react'
import { Heading, Flex, Box } from '@chakra-ui/react'
import { ContactForm } from '../components/ContactForm'

export const Contact: FunctionComponent = (): ReactElement => {
	return (
		<Flex
			alignItems="center"
			flexDirection="column"
			flexGrow="1"
			justifyContent="space-between"
		>
			<Heading>Contact Me</Heading>
			<ContactForm />
			<Box />
		</Flex>
	)
}
