import { FunctionComponent, ReactElement } from 'react'
import { Text, Flex, Box, Image } from '@chakra-ui/react'

export const NotFound: FunctionComponent = (): ReactElement => {
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
					<Text fontSize="3xl" fontWeight="bold">
						404
					</Text>
					<Text>Page not found.</Text>
					<Box paddingTop="3">
						<Image
							shadow="dark-lg"
							boxSize="15em"
							objectFit="cover"
							src="https://smartlandapartments.com/wp-content/uploads/2022/03/CLE-3-Blog-8.jpg"
							alt="sad cat 404"
						/>
					</Box>
				</Flex>
				<Box />
			</Flex>
		</>
	)
}
