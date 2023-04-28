import { create } from 'zustand'

interface Dice {
	value: number
	roll: () => void
}

function randomNumber(min: number, max: number) {
	return Math.floor(Math.random() * (max - min) + min)
}

export const useDiceStore = create<Dice>((set) => ({
	value: 0,
	roll: () => {
		set({ value: randomNumber(1, 6) })
	},
}))
