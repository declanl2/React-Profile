import { FunctionComponent, ReactElement } from 'react'
import { Box, Flex, Text, Link, useColorMode } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons' // Import HamburgerIcon
import { Link as ReactRouterLink } from 'react-router-dom'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { HamburgerMenu } from './HamburgerMenu'

export const NavBar: FunctionComponent = (): ReactElement => {
	const { colorMode } = useColorMode()
	const githubURL: string = 'https://github.com/declanl2'

	return (
		<Flex
			alignItems={'center'}
			justifyContent={'space-between'}
			borderBottom={1}
			borderStyle={'solid'}
			borderColor={colorMode === 'light' ? 'gray.100' : 'gray.900'}
			shadow={'sm'}
			px={10}
			py={1}
			fontSize={'sm'}
		>
			<HamburgerMenu />

			<Box display={{ base: 'none', md: 'block' }}>
				{' '}
				<Link as={ReactRouterLink} to="/" mr={10}>
					Home
				</Link>
				<Link as={ReactRouterLink} to="/about" mr={10}>
					About
				</Link>
				<Link as={ReactRouterLink} to="/projects" mr={10}>
					Projects
				</Link>
				<Link as={ReactRouterLink} to="/contact" mr={10}>
					Contact
				</Link>
			</Box>

			<Flex alignItems={'center'} justifyContent={'space-between'}>
				<Text mr={5}>Declan Lawson</Text>
				<Link href={githubURL} isExternal>
					GitHub <ExternalLinkIcon mx="2px" />
				</Link>
				<ColorModeSwitcher justifySelf="flex-end" />
			</Flex>
		</Flex>
	)
}
