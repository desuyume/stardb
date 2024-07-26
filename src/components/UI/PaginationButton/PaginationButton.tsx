import { Link } from 'react-router-dom'
import ArrowIcon from '../Icons/ArrowIcon'
import styles from './pagination-button.module.scss'

export function PaginationButtonLeft({
	href,
	isDisabled,
	clickPageCallback
}: {
	href: string
	isDisabled?: boolean
	clickPageCallback?: () => void
}) {
	return isDisabled ? (
		<button
			disabled={true}
			className={`${styles.paginationButtonLeft} ${styles.disabled}}`}
		>
			<ArrowIcon variant='light' direction='left' />
		</button>
	) : (
		<Link
			to={href}
			onClick={clickPageCallback}
			className={`${styles.paginationButtonLeft}`}
		>
			<ArrowIcon variant='light' direction='left' />
		</Link>
	)
}

export function PaginationButtonRight({
	href,
	isDisabled,
	clickPageCallback
}: {
	href: string
	isDisabled?: boolean
	clickPageCallback?: () => void
}) {
	return isDisabled ? (
		<button
			disabled={true}
			className={`${styles.paginationButtonRight} ${styles.disabled}}`}
		>
			<p>Далее</p>
			<ArrowIcon variant='dark' direction='right' />
		</button>
	) : (
		<Link
			to={href}
			onClick={clickPageCallback}
			className={`${styles.paginationButtonRight}`}
		>
			<p>Далее</p>
			<ArrowIcon variant='dark' direction='right' />
		</Link>
	)
}
