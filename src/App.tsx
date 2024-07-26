import './assets/styles/globals.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './AppRouter'
import Layout from './layout/Layout'

function App() {
	return (
		<Router>
			<Layout>
				<AppRouter />
			</Layout>
		</Router>
	)
}

export default App
