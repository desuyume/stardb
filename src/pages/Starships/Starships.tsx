import { FC, useEffect, useState } from 'react'
import styles from './starships.module.scss'
import { useGetStarshipsQuery } from 'utils/api/hooks/useGetStarshipsQuery'
import StarshipCard from 'components/StarshipCard/StarshipCard'
import { getStarshipId, isNumber } from 'lib/utils'
import { StarshipsSkeleton } from 'components/UI/Skeletons/Skeletons'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import Pagination from 'components/Pagination/Pagination'

type Sort = 'name' | 'cost'

const Starships: FC = () => {
	const [sort, setSort] = useState<Sort>('name')
	const [searchValue, setSearchValue] = useState<string>('')
	const [searchQuery, setSearchQuery] = useState<string>('')
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [filteredStarships, setFilteredStarships] = useState<Starship[]>([])

	const { pathname } = useLocation()
	const [searchParams] = useSearchParams()
	const navigate = useNavigate()

	const {
		data: starshipsResponse,
		isLoading,
		isFetching,
		isError,
		error
	} = useGetStarshipsQuery({
		query: { search: searchQuery, page: currentPage }
	})

	const sortStarships = () => {
		if (!starshipsResponse || !starshipsResponse.data) {
			return
		}

		const sortedStarships = [...starshipsResponse.data.results]

		switch (sort) {
			case 'name':
				sortedStarships.sort((a, b) => a.name.localeCompare(b.name))
				break
			case 'cost':
				sortedStarships.sort((a, b) => {
					if (!isNumber(a.cost_in_credits)) {
						return 1
					}
					if (!isNumber(b.cost_in_credits)) {
						return 0
					}

					return Number(b.cost_in_credits) - Number(a.cost_in_credits)
				})
				break
		}

		setFilteredStarships(sortedStarships)
	}

	const searchStarships = () => {
		setSearchQuery(searchValue)
		const params = new URLSearchParams(searchParams)
		if (searchValue) {
			params.set('search', searchValue)
		} else {
			params.delete('search')
		}
		params.set('page', '1')
		navigate(`${pathname}?${params.toString()}`)
	}

	const checkSearchParams = () => {
		const searchParam = searchParams.get('search') ?? ''
		const pageParam = Number(searchParams.get('page') ?? 1)
		const sortParam = searchParams.get('sort')

		setSearchValue(searchParam)
		setSearchQuery(searchParam)
		setCurrentPage(pageParam)
		if (sortParam !== 'name' && sortParam !== 'cost') {
			if (!sortParam) return
			const params = new URLSearchParams(searchParams)
			setSort('name')
			params.set('sort', 'name')
			navigate(`${pathname}?${params.toString()}`)
		} else {
			setSort(sortParam)
		}
	}

	useEffect(() => {
		checkSearchParams()
	}, [searchParams])

	useEffect(() => {
		sortStarships()
	}, [sort, starshipsResponse])

	return (
		<section className={styles.starships}>
			<h2>Starships</h2>

			<div className={styles.filters}>
				<div className={styles.sort}>
					<label htmlFor='sort'>Sort by:</label>
					<select
						id='sort'
						name='sort'
						value={sort}
						onChange={e => {
							const chosenSort = e.target.value as Sort
							setSort(chosenSort)
							const params = new URLSearchParams(searchParams)
							params.set('sort', chosenSort)
							navigate(`${pathname}?${params.toString()}`)
						}}
					>
						<option value='name'>Name</option>
						<option value='cost'>Cost</option>
					</select>
				</div>

				<div className={styles.search}>
					<input
						value={searchValue}
						onChange={e => setSearchValue(e.target.value)}
						onKeyDown={e => e.key === 'Enter' && searchStarships()}
						type='text'
						placeholder='Search...'
					/>
					<button onClick={searchStarships}>Search</button>
				</div>
			</div>

			<div className={styles.cards}>
				{(isLoading || isFetching) && <StarshipsSkeleton />}
				{(isError && error.response.status === 404) ||
					(!isLoading && !starshipsResponse?.data.results.length && (
						<div className={styles.error}>
							<p>Starships not found</p>
						</div>
					))}
				{isError && error.response.status !== 404 && (
					<div className={styles.error}>
						<p>Something went wrong</p>
					</div>
				)}

				{!isLoading &&
					!isFetching &&
					!isError &&
					filteredStarships.map(starship => (
						<StarshipCard
							key={getStarshipId(starship.url)}
							starship={starship}
						/>
					))}
			</div>

			{!isLoading && !isFetching && !isError && starshipsResponse?.data && (
				<Pagination
					totalPages={Math.ceil((starshipsResponse?.data.count || 0) / 10)}
					clickPageCallback={() => window.scrollTo(0, 0)}
				/>
			)}
		</section>
	)
}

export default Starships
