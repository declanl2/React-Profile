import { ReactElement, FunctionComponent } from 'react'
import PurpleWave from '../assets/purple-wave-slim.svg'
import {
	ListItem,
	ListIcon,
	List,
	Link,
	Box,
	Container,
	Text,
	Heading,
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { AiFillGithub } from 'react-icons/ai'

export const Footer: FunctionComponent = (): ReactElement => {
	const imageURL: string = `url(${PurpleWave})`
	const email: string = 'hi@declanlawson.dev'
	return (
		<>
			<Box
				backgroundImage={imageURL}
				backgroundSize="cover"
				backgroundRepeat="no-repeat"
				backgroundPosition="bottom"
				width="100%"
				height="300px"
			></Box>
			<Box
				backgroundColor="#6e24c7"
				width="100%"
				height="200px"
				position="relative"
				top="-1px"
				fontWeight="bold"
				color="white"
			>
				<Container>
					<Heading textAlign="center" size="lg">
						Declan Lawson
					</Heading>
					<Text></Text>
					<List p="30px">
						<ListItem>
							<ListIcon as={EmailIcon} />
							<Link href={`mailto:${email}`}>{email}</Link>
						</ListItem>
						<ListItem>
							<ListIcon as={AiFillGithub} />
							<Link href="https://github.com/declanl2">
								declanl2
							</Link>
						</ListItem>
					</List>
				</Container>
			</Box>
		</>
	)
}
