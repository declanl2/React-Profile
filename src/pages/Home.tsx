import { FunctionComponent, ReactElement } from 'react'
import { Flex, Heading, Container, Box, Text, Link } from '@chakra-ui/react'

export const Home: FunctionComponent = (): ReactElement => {
	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			justifyContent="space-between"
			py="10vh"
		>
			<Box />
			<Box>
				<Heading size="3xl">Welcome</Heading>
				<Container>Hi, my name is Declan. &#128075;</Container>
			</Box>
			<Box py="40">
				<Text fontWeight={'bold'} textAlign={'center'} fontSize={'2xl'}>
					My website still looks a bit plain at the moment &#128517;,
					but I&apos;m still working on it. &#128512;
				</Text>
				<Text textAlign={'center'}>
					The 404 page works though, so you can try that out if you
					want (especially if you like cats).
					<br />
					<Text
						fontSize={'3xl'}
						fontWeight={'bold'}
						textDecoration={'underline'}
					>
						<Link href="/404">404</Link>
					</Text>
				</Text>
			</Box>
			<Box />
		</Flex>
	)
}
