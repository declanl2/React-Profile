import { FunctionComponent, ReactElement } from 'react'
import { Heading, Flex, Box, useColorModeValue } from '@chakra-ui/react'
import { ContactForm } from '../components/ContactForm'

export const Contact: FunctionComponent = (): ReactElement => {
	const backgroundColor = useColorModeValue('gray.100', 'gray.700')

	return (
		<Flex
			alignItems="center"
			flexDirection="column"
			flexGrow="1"
			justifyContent="space-between"
		>
			<Heading>Contact Me</Heading>
			<Box
				backgroundColor={backgroundColor}
				minW={{ base: '80vw', md: '50vw', lg: '30vw' }}
				mx={'auto'}
				p={5}
				rounded={'lg'}
				boxShadow={'md'}
			>
				<ContactForm />
			</Box>
			<Box />
		</Flex>
	)
}
