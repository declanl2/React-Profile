import { FunctionComponent, ReactElement } from 'react'
import { Button, Text, Code } from '@chakra-ui/react'
import { useCounterStore } from '../stores/counterStore'
import { useDiceStore } from '../stores/diceStore'

export const ZustandExample: FunctionComponent = (): ReactElement => {
	const incrementCount = useCounterStore((state) => state.incrementCount)
	const rollDice = useDiceStore((state) => state.roll)
	return (
		<>
			<Text my={5}>
				Click the button to increment <Code>count</Code> in the Zustand{' '}
				<Code>counterStore</Code>.
			</Text>
			<Button onClick={incrementCount}>Increment Count</Button>
			<Button onClick={rollDice}>Roll Dice</Button>
		</>
	)
}
