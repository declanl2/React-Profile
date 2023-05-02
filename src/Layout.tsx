import { FunctionComponent, ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

export const Layout: FunctionComponent = (): ReactElement => {
	return (
		<Flex minH="100vh" flexDirection="column">
			<NavBar />
			{/* An <Outlet> renders whatever child route is currently active,
			so you can think about this as a placeholder for the child routes
			we defined in index.tsx */}
			<Flex p={8} flexDirection="column" flexGrow="1">
				<Outlet />
			</Flex>

			<Footer />
		</Flex>
	)
}
