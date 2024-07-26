import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './starship-card.module.scss'
import { formatCredits, getStarshipId } from 'lib/utils'
import { STARSHIP_IMAGE_URL } from 'utils/constants/starship'
import { ROUTES } from 'utils/constants/routes'
import noImage from 'assets/images/no-image.png'

interface StarshipCardProps {
	starship: Starship
}

const StarshipCard: FC<StarshipCardProps> = ({
	starship: { name, url, cost_in_credits }
}) => {
	const id = getStarshipId(url)
	const image_url = `${STARSHIP_IMAGE_URL}/${id}.jpg`
	const [imageExists, setImageExists] = useState<boolean>(true)

	return (
		<Link to={`${ROUTES.STARSHIPS}/${id}`}>
			<div className={styles.card}>
				{imageExists ? (
					<img
						onError={() => setImageExists(false)}
						className={styles.cardImage}
						src={image_url}
						alt={name}
					/>
				) : (
					<img className={styles.cardImage} src={noImage} alt={name} />
				)}

				<div>
					<div className={styles.cardInfo}>
						<p className={styles.infoTitle}>Cost:</p>
						<p className={styles.infoValue}>{formatCredits(cost_in_credits)}</p>
					</div>
					<div className={styles.cardInfo}>
						<p className={styles.infoTitle}>Name:</p>
						<p className={styles.infoValue}>{name}</p>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default StarshipCard
