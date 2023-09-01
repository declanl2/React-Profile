import { FunctionComponent, ReactElement } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link as ReactRouterLink } from 'react-router-dom'
import {
	Flex,
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

import { NavBarItem } from '../data/NavBarItems'

interface HamburgerMenuProps {
	navBarItems: NavBarItem[]
}

export const HamburgerMenu: FunctionComponent<HamburgerMenuProps> = ({
	navBarItems,
}): ReactElement => {
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
				placement="left"
				onClose={onClose}
				size="xs"
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Menu</DrawerHeader>
					<DrawerBody>
						<Flex
							justifyContent={'space-between'}
							direction={'column'}
							shadow={'sm'}
							px={10}
							py={1}
						>
							{navBarItems.map((item: NavBarItem) => (
								<Link
									as={ReactRouterLink}
									to={item.to}
									mb={2}
									key={item.name}
									onClick={onClose}
								>
									{item.name}
								</Link>
							))}
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}
