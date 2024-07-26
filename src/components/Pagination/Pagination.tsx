import {
	PaginationButtonLeft,
	PaginationButtonRight
} from 'components/UI/PaginationButton/PaginationButton'
import { generatePagination } from 'lib/utils'
import { FC, useEffect } from 'react'
import {
	Link,
	useLocation,
	useNavigate,
	useSearchParams
} from 'react-router-dom'
import styles from './pagination.module.scss'

const Pagination: FC<{
	totalPages: number
	clickPageCallback?: () => void
}> = ({ totalPages, clickPageCallback }) => {
	const { pathname } = useLocation()
	const [searchParams] = useSearchParams()
	const navigate = useNavigate()

	const currentPage = searchParams.get('page')
		? Number(searchParams.get('page'))
		: 1
	const allPages = generatePagination(currentPage, totalPages)

	const createPageURL = (pageNumber: number | string) => {
		const params = new URLSearchParams(searchParams)
		params.set('page', pageNumber.toString())
		return `${pathname}?${params.toString()}`
	}

	useEffect(() => {
		console.log(totalPages)

		if (currentPage === 1) return

		if (currentPage > totalPages) {
			navigate(`${pathname}?page=${totalPages}`)
		}
		if (currentPage < 1) {
			navigate(`${pathname}?page=1`)
		}
	}, [currentPage])

	return (
		<nav className='inline-flex items-center self-center'>
			<PaginationButtonLeft
				href={createPageURL(currentPage - 1)}
				isDisabled={currentPage <= 1}
				clickPageCallback={clickPageCallback}
			/>

			<div className='flex'>
				{allPages.map(page => {
					return (
						<div key={page} className={styles.pagination}>
							{page === '...' || currentPage === page ? (
								<p
									className={`${styles.currentPage} ${
										currentPage === page ? 'underline' : ''
									}`}
								>
									{page}
								</p>
							) : (
								<Link
									to={createPageURL(page)}
									className={`${styles.pageLink} ${
										currentPage === page ? 'underline' : ''
									}`}
									onClick={clickPageCallback}
								>
									{page}
								</Link>
							)}
						</div>
					)
				})}
			</div>

			<PaginationButtonRight
				href={createPageURL(currentPage + 1)}
				isDisabled={currentPage >= totalPages}
				clickPageCallback={clickPageCallback}
			/>
		</nav>
	)
}

export default Pagination
