import { ReactElement, FunctionComponent } from 'react'
import PurpleWave from '../assets/purplewave.svg'
import { Image } from '@chakra-ui/react'

export const Footer: FunctionComponent = (): ReactElement => {
	return (
		<>
			<Image src={PurpleWave}></Image>
		</>
	)
}
