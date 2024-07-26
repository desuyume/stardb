import { FC } from 'react'

const CloseIcon: FC = () => {
	return (
		<svg
			width='21'
			height='22'
			viewBox='0 0 21 22'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M20 1.5L1 20.5'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M1 1.5L20 20.5'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export default CloseIcon
