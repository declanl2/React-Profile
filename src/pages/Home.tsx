import { FunctionComponent, ReactElement } from 'react'
import { Flex, Heading, Container, Box } from '@chakra-ui/react'

export const Home: FunctionComponent = (): ReactElement => {
	return (
		<Flex
			alignItems="center"
			flexDirection="column"
			flexGrow="1"
			border="1px solid red"
			justifyContent="space-between"
		>
			<Box />
			<Box border="1px solid blue">
				<Heading size="3xl">Welcome</Heading>
				<Container border="1px solid blue">
					Hi, my name is Declan.
				</Container>
			</Box>

			<Box />
		</Flex>
	)
}
