import './assets/styles/globals.scss'
import AppRouter from './AppRouter'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './layout/Layout'

function App() {
	return (
		<Router>
			<Layout children={<AppRouter />} />
		</Router>
	)
}

export default App
