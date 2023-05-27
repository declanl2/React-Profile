import { FunctionComponent, ReactElement } from 'react'
import { Flex, Heading, Container, Box } from '@chakra-ui/react'

export const Home: FunctionComponent = (): ReactElement => {
	return (
		<Flex
			alignItems="center"
			flexDirection="column"
			flexGrow="1"
			justifyContent="space-between"
		>
			<Box />
			<Box>
				<Heading size="3xl">Welcome</Heading>
				<Container>Hi, my name is Declan.</Container>
			</Box>

			<Box />
		</Flex>
	)
}
