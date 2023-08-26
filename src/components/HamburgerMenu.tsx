import { FunctionComponent, ReactElement } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link as ReactRouterLink } from 'react-router-dom'
import {
	Box,
	Link,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	IconButton,
	useDisclosure,
} from '@chakra-ui/react'

export const HamburgerMenu: FunctionComponent = (): ReactElement => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<IconButton
				aria-label="Open menu"
				icon={<HamburgerIcon />}
				variant="ghost"
				onClick={onOpen}
				display={{ base: 'block', md: 'none' }} // Show only on smaller screens
			/>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				size="xs"
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Menu</DrawerHeader>
					<DrawerBody>
						<Box>
							<Link
								as={ReactRouterLink}
								to="/"
								mb={2}
								onClick={onClose}
							>
								Home
							</Link>
							<Link
								as={ReactRouterLink}
								to="/about"
								mb={2}
								onClick={onClose}
							>
								About
							</Link>
							<Link
								as={ReactRouterLink}
								to="/projects"
								mb={2}
								onClick={onClose}
							>
								Projects
							</Link>
							<Link
								as={ReactRouterLink}
								to="/contact"
								mb={2}
								onClick={onClose}
							>
								Contact
							</Link>
						</Box>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}
