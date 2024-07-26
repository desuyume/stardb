import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetStarshipsIdQuery } from 'utils/api/hooks/useGetStarshipsIdQuery'
import { STARSHIP_IMAGE_URL } from 'utils/constants/starship'
import { formatCredits, formatDate } from 'lib/utils'
import noImage from 'assets/images/no-image.png'
import { StarshipsIdSkeleton } from 'components/UI/Skeletons/Skeletons'
import styles from './starships-id.module.scss'

const StarshipsId: FC = () => {
	const { id } = useParams()
	const image_url = `${STARSHIP_IMAGE_URL}/${id}.jpg`
	const [imageExists, setImageExists] = useState<boolean>(true)

	const {
		data: starship,
		isLoading,
		isError,
		error
	} = useGetStarshipsIdQuery(
		{ id: id ?? '' },
		{
			options: {
				enabled: !!id
			}
		}
	)

	return (
		<section className={styles.starshipsId}>
			{isLoading && <StarshipsIdSkeleton />}
			{isError && error.response.status === 404 && <h2>Starship not found</h2>}
			{isError && error.response.status !== 404 && (
				<h2>Something went wrong</h2>
			)}

			{starship && (
				<>
					<h2>{starship.data.name}</h2>

					<div className={styles.infoContainer}>
						{imageExists ? (
							<img
								onError={() => setImageExists(false)}
								className={styles.cardImage}
								src={image_url}
								alt={starship.data.name}
							/>
						) : (
							<img
								className={styles.cardImage}
								src={noImage}
								alt={starship.data.name}
							/>
						)}

						<div className={styles.info}>
							<div className={styles.infoItem}>
								<p className={styles.infoTitle}>Model:</p>
								<p className={styles.infoValue}>{starship.data.model}</p>
							</div>

							<div className={styles.infoItem}>
								<p className={styles.infoTitle}>Name:</p>
								<p className={styles.infoValue}>{starship.data.name}</p>
							</div>

							<div className={styles.infoItem}>
								<p className={styles.infoTitle}>Length:</p>
								<p className={styles.infoValue}>{starship.data.length}</p>
							</div>

							<div className={styles.infoItem}>
								<p className={styles.infoTitle}>Cost:</p>
								<p className={styles.infoValue}>
									{formatCredits(starship.data.cost_in_credits)}
								</p>
							</div>

							<div className={styles.infoItem}>
								<p className={styles.infoTitle}>Created:</p>
								<p className={styles.infoValue}>
									{formatDate(starship.data.created)}
								</p>
							</div>
						</div>
					</div>

					<p className={styles.description}>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
						commodo ligula eget dolor. Aenean massa. Cum sociis natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
						Nulla consequat massa quis enim. Lorem ipsum dolor sit amet,
						consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
						Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
						montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
						pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim
					</p>
				</>
			)}
		</section>
	)
}

export default StarshipsId
