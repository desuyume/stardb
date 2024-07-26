import { Navigate, useRoutes } from 'react-router-dom'
import Main from 'pages/Main/Main'
import Starships from 'pages/Starships/Starships'
import StarshipsId from 'pages/StarshipsId/StarshipsId'
import Form from 'pages/Form/Form'
import { ROUTES } from 'utils/constants/routes'

function AppRouter() {
	const routes = useRoutes([
		{ path: ROUTES.INDEX, element: <Main /> },
		{ path: ROUTES.STARSHIPS, element: <Starships /> },
		{ path: `${ROUTES.STARSHIPS}/:id`, element: <StarshipsId /> },
		{ path: ROUTES.FORM, element: <Form /> },
		{ path: '*', element: <Navigate to={ROUTES.INDEX} /> }
	])
	return routes
}

export default AppRouter
