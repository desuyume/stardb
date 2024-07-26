export default function ArrowIcon({
	variant,
	direction
}: {
	variant: 'light' | 'dark'
	direction: 'left' | 'right'
}) {
	return (
		<svg
			width='28'
			height='14'
			viewBox='0 0 28 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			{direction === 'left' && (
				<path
					d='M27 7H1M1 7L7.09524 1M1 7L7.09524 13'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					style={
						variant === 'light' ? { stroke: '#fff' } : { stroke: '#1e1e1e' }
					}
				/>
			)}

			{direction === 'right' && (
				<path
					d='M1 7H27M27 7L20.9048 1M27 7L20.9048 13'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					style={
						variant === 'light' ? { stroke: '#fff' } : { stroke: '#1e1e1e' }
					}
				/>
			)}
		</svg>
	)
}
