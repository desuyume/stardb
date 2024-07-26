import { FC } from 'react'
import styles from './main.module.scss'

const Main: FC = () => {
	return (
		<section className={styles.main}>
			<h1 className={styles.title}>Welcome to StarDB</h1>

			<div className={styles.description}>
				<p className={styles.descriptionText}>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
					commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
					et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
					felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
					consequat massa quis enim
				</p>
				<div className={styles.blur} />
			</div>
		</section>
	)
}

export default Main
