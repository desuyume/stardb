import styles from './skeletons.module.scss'

export function StarshipCardSkeleton() {
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

export function StarshipsSkeleton() {
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

export function StarshipsIdSkeleton() {
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
