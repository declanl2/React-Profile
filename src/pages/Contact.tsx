import { FunctionComponent, ReactElement } from 'react'
import { Heading, Flex } from '@chakra-ui/react'

export const Contact: FunctionComponent = (): ReactElement => {
	return (
		<Flex
			alignItems="center"
			flexDirection="column"
			flexGrow="1"
			justifyContent="space-between"
		>
			<Heading>Contact Me</Heading>
		</Flex>
	)
}
