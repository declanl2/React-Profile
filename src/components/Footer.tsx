import { ReactElement, FunctionComponent } from 'react'
import PurpleWave from '../assets/purplewave.svg'
import { Flex } from '@chakra-ui/react'

export const Footer: FunctionComponent = (): ReactElement => {
	const imageURL: string = `url(${PurpleWave})`
	return (
		<>
			<Flex
				backgroundImage={imageURL}
				width="100%"
				height="100vh"
				backgroundSize="cover"
				backgroundRepeat="no-repeat"
				backgroundPosition="bottom"
				grow="0"
			></Flex>
		</>
	)
}
