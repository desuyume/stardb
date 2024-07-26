import { FC, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from 'utils/constants/routes'
import MenuIcon from 'components/UI/Icons/MenuIcon'
import CloseIcon from 'components/UI/Icons/CloseIcon'
import styles from './layout.module.scss'

interface LayoutProperties {
	children: React.ReactNode
}

const Layout: FC<LayoutProperties> = ({ children }) => {
	const [isMenuMobileOpen, setIsMenuMobileOpen] = useState<boolean>(false)
	const { pathname } = useLocation()

	return (
		<>
			<header>
				<Link
					onClick={() => isMenuMobileOpen && setIsMenuMobileOpen(false)}
					to={ROUTES.INDEX}
					className={styles.logo}
				>
					StarDB
				</Link>

				<nav className={styles.menu}>
					<Link
						className={pathname === ROUTES.FORM ? styles.active : ''}
						to={ROUTES.FORM}
					>
						Form
					</Link>
					<Link
						className={
							pathname === ROUTES.STARSHIPS ||
							pathname.startsWith(`${ROUTES.STARSHIPS}/`)
								? styles.active
								: ''
						}
						to={ROUTES.STARSHIPS}
					>
						Starships
					</Link>
				</nav>

				<div className={styles.menuMobileContainer}>
					<button
						onClick={() => setIsMenuMobileOpen(!isMenuMobileOpen)}
						className={styles.menuMobileButton}
					>
						{isMenuMobileOpen ? <CloseIcon /> : <MenuIcon />}
					</button>

					<nav
						className={`${styles.menuMobilePopup} ${isMenuMobileOpen ? styles.open : ''}`}
					>
						<Link
							className={
								pathname === ROUTES.STARSHIPS ||
								pathname.startsWith(`${ROUTES.STARSHIPS}/`)
									? styles.active
									: ''
							}
							to={ROUTES.STARSHIPS}
							onClick={() => setIsMenuMobileOpen(false)}
						>
							Starships
						</Link>
						<Link
							className={pathname === ROUTES.FORM ? styles.active : ''}
							to={ROUTES.FORM}
							onClick={() => setIsMenuMobileOpen(false)}
						>
							Form
						</Link>
					</nav>
				</div>
			</header>

			{children}
		</>
	)
}

export default Layout
