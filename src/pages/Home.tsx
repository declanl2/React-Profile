import { FunctionComponent, ReactElement } from 'react'
import { Flex, Heading, Container, Box } from '@chakra-ui/react'

export const Home: FunctionComponent = (): ReactElement => {
	return (
		<Flex alignItems="center" justifyContent="space-between" py="10vh">
			<Box />
			<Box>
				<Heading size="3xl">Welcome</Heading>
				<Container>Hi, my name is Declan. &#128075;</Container>
			</Box>
			<Box />
		</Flex>
	)
}
