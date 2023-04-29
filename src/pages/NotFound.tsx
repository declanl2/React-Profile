import { FunctionComponent, ReactElement } from 'react'
import { Text, Flex, Box, Image, Button } from '@chakra-ui/react'

const msgs: string[] = [
	'Whoops! Looks like we took a wrong turn at Albuquerque.',
	"This isn't the page you're looking for. Move along.",
	"I'm sorry, Dave. I'm afraid I can't find that page.",
	"Uh-oh, looks like we've got a 404 on our hands. Better call in the tech support cavalry!",
	'Well, this is awkward... We seem to have misplaced the page you were looking for.',
	"The page you're looking for is in another castle. Sorry about that.",
	"It's not you, it's me. I can't seem to find the page you're looking for.",
	"Don't worry, be 404.",
	"Looks like the page you were searching for has gone into hiding. Maybe it's in the witness protection program?",
	"The good news: You're not lost. The bad news: The page you were looking for is.",
]

function randomMessage() {
	const min = 0
	const max: number = msgs.length - 1
	const randomNum: number = Math.floor(Math.random() * (max - min) + min)
	return msgs[randomNum]
}

export const NotFound: FunctionComponent = (): ReactElement => {
	const msg: string = randomMessage()

	return (
		<>
			<Flex
				flexDirection="column"
				alignItems="center"
				flexGrow="1"
				justifyContent="space-between"
			>
				<Box />
				<Flex flexDirection="column" alignItems="center">
					<Text fontSize="8xl" fontWeight="bold">
						404
					</Text>
					<Text fontWeight="bold">Oops, page not found.</Text>
					<Text fontStyle="italic">{msg}</Text>
					<Box p="3">
						<Image
							shadow="dark-lg"
							boxSize="15em"
							objectFit="cover"
							src="https://smartlandapartments.com/wp-content/uploads/2022/03/CLE-3-Blog-8.jpg"
							alt="sad cat 404"
						/>
					</Box>
					<Button as="a" colorScheme="purple" href="/">
						Go Home
					</Button>
				</Flex>
				<Box />
			</Flex>
		</>
	)
}
