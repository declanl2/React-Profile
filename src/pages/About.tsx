import { ReactElement, FunctionComponent } from 'react'
import { Heading, Flex } from '@chakra-ui/react'

export const About: FunctionComponent = (): ReactElement => {
	return (
		<Flex
			alignItems="center"
			flexDirection="column"
			flexGrow="1"
			justifyContent="space-between"
		>
			<Heading>About Me</Heading>
		</Flex>
	)
}
