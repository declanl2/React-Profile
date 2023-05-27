import { ReactElement, FunctionComponent } from 'react'
import { Flex, Heading } from '@chakra-ui/react'

export const Projects: FunctionComponent = (): ReactElement => {
	return (
		<Flex
			alignItems="center"
			flexDirection="column"
			flexGrow="1"
			justifyContent="space-between"
		>
			<Heading>Projects</Heading>
		</Flex>
	)
}
