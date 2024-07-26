import styles from './skeletons.module.scss'

export const StarshipCardSkeleton = () => {
	return (
		<div className={styles.card}>
			<div className={`${styles.cardImage} ${styles.shimmer}`} />

			<div>
				<div className={`${styles.cardInfo} ${styles.shimmer}`} />
				<div className={`${styles.cardInfo} ${styles.shimmer}`} />
			</div>
		</div>
	)
}

export const StarshipsSkeleton = () => {
	return (
		<div className={styles.cards}>
			<StarshipCardSkeleton />
			<StarshipCardSkeleton />
			<StarshipCardSkeleton />
			<StarshipCardSkeleton />
			<StarshipCardSkeleton />
			<StarshipCardSkeleton />
			<StarshipCardSkeleton />
			<StarshipCardSkeleton />
			<StarshipCardSkeleton />
			<StarshipCardSkeleton />
		</div>
	)
}

export const StarshipsIdSkeleton = () => {
	return (
		<div className={styles.starshipsId}>
			<div className={`${styles.headingText} ${styles.shimmer}`} />

			<div className={styles.infoContainer}>
				<div className={`${styles.cardImage} ${styles.shimmer}`} />

				<div className={styles.info}>
					<div className={`${styles.infoItem} ${styles.shimmer}`} />
					<div className={`${styles.infoItem} ${styles.shimmer}`} />
					<div className={`${styles.infoItem} ${styles.shimmer}`} />
					<div className={`${styles.infoItem} ${styles.shimmer}`} />
					<div className={`${styles.infoItem} ${styles.shimmer}`} />
				</div>
			</div>

			<div className={`${styles.description} ${styles.shimmer}`} />
		</div>
	)
}
